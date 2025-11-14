
import React from 'react';

interface ScoreDisplayProps {
  score: number;
  highScore: number;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, highScore }) => {
  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-center bg-black/40 p-3 rounded-lg text-lg md:text-xl z-20">
      <div>
        Score: <span className="font-bold text-green-400">{score}</span>
      </div>
      <div>
        High Score: <span className="font-bold text-yellow-400">{highScore}</span>
      </div>
    </div>
  );
};
