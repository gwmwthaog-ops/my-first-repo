
import React from 'react';
import { FruitIcon } from './FruitIcon';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-black/30 backdrop-blur-sm text-center">
      <div className="flex space-x-4 mb-8">
        <FruitIcon type="apple" className="w-16 h-16 transform -rotate-12" />
        <FruitIcon type="banana" className="w-16 h-16" />
        <FruitIcon type="watermelon" className="w-16 h-16 transform rotate-12" />
        <FruitIcon type="orange" className="w-16 h-16 transform rotate-6" />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Slice?</h2>
      <p className="text-lg md:text-xl max-w-md mx-auto mb-8 text-gray-200">
        Swipe across the screen to slice the fruits. Avoid the bombs to keep playing and set a new high score!
      </p>
      <button
        onClick={onStart}
        className="px-8 py-4 bg-green-500 text-white font-bold text-2xl rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        Start Game
      </button>
    </div>
  );
};

export default StartScreen;
