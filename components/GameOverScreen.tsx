
import React from 'react';

interface GameOverScreenProps {
  score: number;
  highScore: number;
  onRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, highScore, onRestart }) => {
  const isNewHighScore = score > 0 && score === highScore;
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-black/50 backdrop-blur-sm text-center">
      <h2 className="text-5xl md:text-7xl font-bold text-red-500 mb-4">Game Over</h2>
      {isNewHighScore && (
        <p className="text-2xl font-bold text-yellow-400 animate-pulse mb-4">New High Score!</p>
      )}
      <div className="text-2xl md:text-3xl mb-2">Your Score: <span className="font-bold text-white">{score}</span></div>
      <div className="text-xl md:text-2xl mb-8">High Score: <span className="font-bold text-yellow-300">{highScore}</span></div>
      
      <button
        onClick={onRestart}
        className="px-8 py-4 bg-blue-500 text-white font-bold text-2xl rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOverScreen;
