
import React from 'react';
import { FruitType } from '../types';
import { FRUIT_CONFIG } from '../utils/imageLoader';

interface FruitIconProps {
  type: FruitType;
  className?: string;
}

function svgToDataURL(svg: string): string {
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

export const FruitIcon: React.FC<FruitIconProps> = ({ type, className }) => {
  const svgDataUrl = svgToDataURL(FRUIT_CONFIG[type].full);
  return <img src={svgDataUrl} alt={type} className={className} />;
};
