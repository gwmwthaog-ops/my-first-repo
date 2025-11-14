
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { GameObject, Point, Particle, FruitType } from '../types';
import { loadImages, FRUIT_CONFIG, BOMB_IMAGE_SRC } from '../utils/imageLoader';

interface GameCanvasProps {
  onGameOver: () => void;
  addScore: (points: number) => void;
}

const GRAVITY = 0.05;
const SLICE_TRAIL_LENGTH = 15;

const GameCanvas: React.FC<GameCanvasProps> = ({ onGameOver, addScore }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameObjects = useRef<GameObject[]>([]);
  const particles = useRef<Particle[]>([]);
  const sliceTrail = useRef<Point[]>([]);
  const lastMousePosition = useRef<Point | null>(null);
  const isSlicing = useRef(false);
  const animationFrameId = useRef<number>();
  const lastFrameTime = useRef<number>(performance.now());
  const timeToNextSpawn = useRef<number>(0);

  const [images, setImages] = useState<Record<string, HTMLImageElement>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initImages = async () => {
      const loadedImages = await loadImages();
      setImages(loadedImages);
      setIsLoading(false);
    };
    initImages();
  }, []);

  const spawnGameObject = useCallback((canvasWidth: number, canvasHeight: number) => {
    const isBomb = Math.random() < 0.2; // 20% chance of being a bomb
    const id = Date.now() + Math.random();
    const radius = canvasWidth * 0.05;

    const spawnEdge = Math.floor(Math.random() * 3); // 0: bottom, 1: left, 2: right
    let position: Point;
    let velocity: Point;

    switch(spawnEdge) {
        case 0: // Bottom
            position = { x: Math.random() * canvasWidth, y: canvasHeight + radius };
            velocity = {
              x: (Math.random() - 0.5) * 5,
              y: -8 - Math.random() * 4,
            };
            break;
        case 1: // Left
            position = { x: -radius, y: Math.random() * canvasHeight };
            velocity = {
              x: 3 + Math.random() * 3,
              y: (Math.random() - 0.5) * 5,
            };
            break;
        case 2: // Right
             position = { x: canvasWidth + radius, y: Math.random() * canvasHeight };
             velocity = {
               x: -3 - Math.random() * 3,
               y: (Math.random() - 0.5) * 5,
             };
             break;
        default: // Failsafe
            position = { x: Math.random() * canvasWidth, y: canvasHeight + radius };
            velocity = {
              x: (Math.random() - 0.5) * 5,
              y: -8 - Math.random() * 4,
            };
    }
    

    const rotation = Math.random() * Math.PI * 2;
    const rotationSpeed = (Math.random() - 0.5) * 0.1;

    if (isBomb) {
      gameObjects.current.push({
        id, type: 'bomb', position, velocity, radius, isSliced: false, rotation, rotationSpeed, image: images.bomb
      });
    } else {
      const fruitTypes = Object.keys(FRUIT_CONFIG) as FruitType[];
      const type = fruitTypes[Math.floor(Math.random() * fruitTypes.length)];
      gameObjects.current.push({
        id, type, position, velocity, radius, isSliced: false, rotation, rotationSpeed, 
        image: images[type],
        slicedImage1: images[`${type}1`],
        slicedImage2: images[`${type}2`],
      });
    }
  }, [images]);

  const createParticles = useCallback((x: number, y: number, color: string) => {
    for (let i = 0; i < 20; i++) {
      particles.current.push({
        id: Math.random(),
        position: { x, y },
        velocity: { x: (Math.random() - 0.5) * 8, y: (Math.random() - 0.5) * 8 },
        radius: Math.random() * 3 + 1,
        color,
        life: 1,
      });
    }
  }, []);

  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const now = performance.now();
    const deltaTime = (now - lastFrameTime.current) / 16.67; // Normalize to 60 FPS
    lastFrameTime.current = now;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Spawn new objects
    timeToNextSpawn.current -= deltaTime * 16.67;
    if (timeToNextSpawn.current <= 0) {
      spawnGameObject(canvas.width, canvas.height);
      timeToNextSpawn.current = 500 + Math.random() * 1000;
    }

    // Update and draw game objects
    gameObjects.current = gameObjects.current.filter(obj => {
      if (!obj.isSliced) {
        obj.velocity.y += GRAVITY * deltaTime;
      }
      obj.position.x += obj.velocity.x * deltaTime;
      obj.position.y += obj.velocity.y * deltaTime;
      obj.rotation += obj.rotationSpeed * deltaTime;

      ctx.save();
      ctx.translate(obj.position.x, obj.position.y);
      ctx.rotate(obj.rotation);
      const img = obj.isSliced ? (obj.velocity.x > 0 ? obj.slicedImage1 : obj.slicedImage2) : obj.image;
      if (img) {
        ctx.drawImage(img, -obj.radius, -obj.radius, obj.radius * 2, obj.radius * 2);
      }
      ctx.restore();

      return obj.position.y < canvas.height + obj.radius * 2 && obj.position.y > -obj.radius * 2 && obj.position.x < canvas.width + obj.radius*2 && obj.position.x > -obj.radius*2;
    });

    // Update and draw particles
    particles.current = particles.current.filter(p => {
        p.position.x += p.velocity.x * deltaTime;
        p.position.y += p.velocity.y * deltaTime;
        p.velocity.y += GRAVITY * 0.5 * deltaTime;
        p.life -= 0.02 * deltaTime;
        
        if(p.life <= 0) return false;

        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        return true;
    });

    // Draw slice trail
    if (sliceTrail.current.length > 1) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(sliceTrail.current[0].x, sliceTrail.current[0].y);
        for (let i = 1; i < sliceTrail.current.length; i++) {
            ctx.lineTo(sliceTrail.current[i].x, sliceTrail.current[i].y);
        }
        ctx.stroke();
    }

    animationFrameId.current = requestAnimationFrame(gameLoop);
  }, [spawnGameObject, createParticles]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isSlicing.current = true;
    const pos = getPointerPosition(e);
    lastMousePosition.current = pos;
    sliceTrail.current = [pos];
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isSlicing.current) return;
    const pos = getPointerPosition(e);
    if (lastMousePosition.current) {
        const dx = pos.x - lastMousePosition.current.x;
        const dy = pos.y - lastMousePosition.current.y;
        if (Math.sqrt(dx * dx + dy * dy) > 10) {
            sliceTrail.current.push(pos);
            if (sliceTrail.current.length > SLICE_TRAIL_LENGTH) {
                sliceTrail.current.shift();
            }
            checkCollisions(lastMousePosition.current, pos);
            lastMousePosition.current = pos;
        }
    }
  };
  
  const handlePointerUp = () => {
    isSlicing.current = false;
    lastMousePosition.current = null;
    setTimeout(() => sliceTrail.current = [], 100);
  };

  const getPointerPosition = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const checkCollisions = (start: Point, end: Point) => {
    gameObjects.current.forEach(obj => {
      if (obj.isSliced) return;

      const dist = Math.sqrt(Math.pow(obj.position.x - end.x, 2) + Math.pow(obj.position.y - end.y, 2));
      if (dist < obj.radius) {
        if (obj.type === 'bomb') {
          onGameOver();
        } else {
          obj.isSliced = true;
          addScore(1);
          createParticles(obj.position.x, obj.position.y, FRUIT_CONFIG[obj.type as FruitType].splashColor);
          
          const sliceAngle = Math.atan2(end.y - start.y, end.x - start.x);
          const perpendicular = sliceAngle + Math.PI / 2;
          
          const piece1 = { ...obj, id: Math.random(), velocity: { x: obj.velocity.x + Math.cos(perpendicular) * 2, y: obj.velocity.y + Math.sin(perpendicular) * 2 } };
          const piece2 = { ...obj, id: Math.random(), velocity: { x: obj.velocity.x - Math.cos(perpendicular) * 2, y: obj.velocity.y - Math.sin(perpendicular) * 2 } };
          
          gameObjects.current.push(piece1, piece2);
          gameObjects.current = gameObjects.current.filter(item => item.id !== obj.id);
        }
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isLoading) return;

    const resizeCanvas = () => {
        const container = canvas.parentElement;
        if (container) {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    lastFrameTime.current = performance.now();
    animationFrameId.current = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [gameLoop, isLoading]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-full text-white text-2xl">Loading Assets...</div>;
  }

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-crosshair"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />
  );
};

export default GameCanvas;
