
import { FruitType } from '../types';

export const FRUIT_CONFIG: Record<FruitType, { splashColor: string; full: string; half1: string; half2: string; }> = {
  apple: {
    splashColor: '#ff4136',
    full: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="a" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="100%" stop-color="#C44D58"/></radialGradient></defs><path d="M85,50 C85,75 65,95 50,95 C35,95 15,75 15,50 C15,30 30,20 50,20 C70,20 85,30 85,50 Z" fill="url(#a)"/><path d="M50,20 Q55,10 65,15" stroke="#6F4E37" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
    half1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="apple_grad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="100%" stop-color="#C44D58"/></radialGradient><linearGradient id="apple_cut" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FDEFEF"/><stop offset="100%" stop-color="#FAD9D5"/></linearGradient></defs><path d="M50,20 C70,20 85,30 85,50 C85,75 65,95 50,95 V20 Z" fill="url(#apple_grad)"/><path d="M50,20 V95" stroke="#C44D58" stroke-width="2"/><path d="M50,20 V95" fill="url(#apple_cut)"/></svg>`,
    half2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="apple_grad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FF6B6B"/><stop offset="100%" stop-color="#C44D58"/></radialGradient><linearGradient id="apple_cut" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FDEFEF"/><stop offset="100%" stop-color="#FAD9D5"/></linearGradient></defs><path d="M50,20 C30,20 15,30 15,50 C15,75 35,95 50,95 V20 Z" fill="url(#apple_grad)"/><path d="M50,20 V95" stroke="#C44D58" stroke-width="2"/><path d="M50,20 V95" fill="url(#apple_cut)"/></svg>`
  },
  banana: {
    splashColor: '#ffd700',
    full: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFEB3B"/><stop offset="100%" stop-color="#FBC02D"/></linearGradient></defs><path d="M20,80 Q50,20 80,50 Q60,80 20,80 Z" fill="url(#b)"/><path d="M78,48 Q85,40 88,35" stroke="#6D4C41" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
    half1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFEB3B"/><stop offset="100%" stop-color="#FBC02D"/></linearGradient><linearGradient id="c" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFFDE7"/><stop offset="100%" stop-color="#FFF9C4"/></linearGradient></defs><path d="M20,80 Q35,50 50,50 Q35,80 20,80Z" fill="url(#b)"/><path d="M50,50 L20,80 L35,80 Q50,65 50,50" fill="url(#c)"/></svg>`,
    half2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFEB3B"/><stop offset="100%" stop-color="#FBC02D"/></linearGradient><linearGradient id="c" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFFDE7"/><stop offset="100%" stop-color="#FFF9C4"/></linearGradient></defs><path d="M80,50 Q65,50 50,50 Q65,80 80,50 Z" fill="url(#b)"/><path d="M50,50 L80,50 L65,80 Q50,65 50,50" fill="url(#c)"/><path d="M78,48 Q85,40 88,35" stroke="#6D4C41" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`
  },
  watermelon: {
    splashColor: '#4CAF50',
    full: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="c" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#81C784"/><stop offset="100%" stop-color="#388E3C"/></radialGradient></defs><circle cx="50" cy="50" r="40" fill="url(#c)"/></svg>`,
    half1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="d" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#81C784"/><stop offset="100%" stop-color="#388E3C"/></radialGradient></defs><path d="M10,50 A40,40 0 0,1 90,50 L10,50 Z" fill="#F44336"/><path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="#FFFFFF" stroke-width="4"/><path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="url(#d)" stroke-width="10"/></svg>`,
    half2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="d" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#81C784"/><stop offset="100%" stop-color="#388E3C"/></radialGradient></defs><path d="M10,50 A40,40 0 0,1 90,50 L10,50 Z" fill="#F44336"/><path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="#FFFFFF" stroke-width="4"/><path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="url(#d)" stroke-width="10"/></svg>`
  },
  orange: {
    splashColor: '#FF9800',
    full: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="e" cx="40%" cy="40%" r="50%"><stop offset="0%" stop-color="#FFB74D"/><stop offset="100%" stop-color="#F57C00"/></radialGradient></defs><circle cx="50" cy="50" r="40" fill="url(#e)"/><circle cx="50" cy="52" r="38" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="2"/></svg>`,
    half1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="f" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFB74D"/><stop offset="100%" stop-color="#F57C00"/></radialGradient></defs><path d="M50,10 A40,40 0 0,1 50,90 V10 Z" fill="url(#f)"/><path d="M50,10 V90" stroke="rgba(255,255,255,0.5)" stroke-width="3"/><path d="M50,10 V90" fill="url(#f)"/></svg>`,
    half2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="f" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFB74D"/><stop offset="100%" stop-color="#F57C00"/></radialGradient></defs><path d="M50,10 A40,40 0 0,0 50,90 V10 Z" fill="url(#f)"/><path d="M50,10 V90" stroke="rgba(255,255,255,0.5)" stroke-width="3"/><path d="M50,10 V90" fill="url(#f)"/></svg>`,
  }
};

export const BOMB_IMAGE_SRC = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="g" cx="40%" cy="40%" r="50%"><stop offset="0%" stop-color="#616161"/><stop offset="100%" stop-color="#212121"/></radialGradient></defs><circle cx="50" cy="50" r="40" fill="url(#g)"/><path d="M50,10 L55,20 H45 Z" fill="#424242"/><path d="M52,12 L65,5 L70,15" stroke="#F9A825" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`;

function svgToDataURL(svg: string): string {
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export async function loadImages(): Promise<Record<string, HTMLImageElement>> {
  const imagePromises: Promise<[string, HTMLImageElement]>[] = [];
  
  for (const fruit in FRUIT_CONFIG) {
    const key = fruit as FruitType;
    imagePromises.push(loadImage(svgToDataURL(FRUIT_CONFIG[key].full)).then(img => [key, img]));
    imagePromises.push(loadImage(svgToDataURL(FRUIT_CONFIG[key].half1)).then(img => [`${key}1`, img]));
    imagePromises.push(loadImage(svgToDataURL(FRUIT_CONFIG[key].half2)).then(img => [`${key}2`, img]));
  }
  
  imagePromises.push(loadImage(svgToDataURL(BOMB_IMAGE_SRC)).then(img => ['bomb', img]));

  const loadedImages = await Promise.all(imagePromises);
  const imageMap: Record<string, HTMLImageElement> = {};
  loadedImages.forEach(([key, img]) => {
    imageMap[key] = img;
  });
  
  return imageMap;
}
