
export enum GameState {
  Start,
  Playing,
  GameOver,
}

export type Point = {
  x: number;
  y: number;
};

export type FruitType = 'apple' | 'banana' | 'watermelon' | 'orange';
export type GameObjectType = FruitType | 'bomb';

export interface GameObject {
  id: number;
  type: GameObjectType;
  position: Point;
  velocity: Point;
  radius: number;
  isSliced: boolean;
  rotation: number;
  rotationSpeed: number;
  image: HTMLImageElement;
  slicedImage1?: HTMLImageElement;
  slicedImage2?: HTMLImageElement;
  sliceAngle?: number;
}

export interface Particle {
  id: number;
  position: Point;
  velocity: Point;
  radius: number;
  color: string;
  life: number;
}
