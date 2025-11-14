
import React, { useState, useCallback } from 'react';
import GameCanvas from './components/GameCanvas';
import StartScreen from './components/StartScreen';
import GameOverScreen from './components/GameOverScreen';
import { GameState } from './types';
import { ScoreDisplay } from './components/ScoreDisplay';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('fruitSliceHighScore') || '0', 10);
  });

  const startGame = useCallback(() => {
    setScore(0);
    setGameState(GameState.Playing);
  }, []);

  const gameOver = useCallback(() => {
    setGameState(GameState.GameOver);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('fruitSliceHighScore', score.toString());
    }
  }, [score, highScore]);

  const addScore = useCallback((points: number) => {
    setScore((prevScore) => prevScore + points);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{backgroundImage: "url('https://picsum.photos/seed/fruitgamebg/1920/1080')"}}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white font-sans">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
          Fruit Slice Frenzy
        </h1>

        {gameState === GameState.Playing && <ScoreDisplay score={score} highScore={highScore} />}

        <div className="w-full max-w-4xl h-[60vh] md:h-[70vh] aspect-video bg-gray-800/50 rounded-lg shadow-2xl border-2 border-gray-500 overflow-hidden">
          {gameState === GameState.Start && <StartScreen onStart={startGame} />}
          {gameState === GameState.Playing && (
            <GameCanvas onGameOver={gameOver} addScore={addScore} />
          )}
          {gameState === GameState.GameOver && (
            <GameOverScreen score={score} highScore={highScore} onRestart={startGame} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
