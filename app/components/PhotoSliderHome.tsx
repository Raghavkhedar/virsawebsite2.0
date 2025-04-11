"use client";

import React, { useState, useEffect, useRef } from 'react';

// Define an array of image URLs for the slideshow with better quality images
const images: string[] = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=500&q=80",
];

const PhotoSliderHome: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle image loading
  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="relative h-60 -mt-52 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-transparent pointer-events-none z-10"></div>
      <div 
        ref={containerRef}
        className="flex space-x-10 slideshow-container whitespace-nowrap px-6"
        style={{ 
          animation: 'slideLoop 30s linear infinite',
          width: `${images.length * 2 * 288}px` // Double the width to accommodate duplicated images
        }}
      >
        {/* First set of images */}
        {images.map((image, index) => (
          <div 
            key={`original-${index}`} 
            className="w-72 h-48 rounded-lg overflow-hidden shadow-2xl flex-shrink-0 transform transition-transform hover:scale-105 hover:-translate-y-1 duration-300"
            style={{
              boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="w-full h-full relative">
              {isLoading ? (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              ) : (
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
              </div>
            </div>
          </div>
        ))}
        
        {/* Duplicated set of images for seamless loop */}
        {images.map((image, index) => (
          <div 
            key={`duplicate-${index}`} 
            className="w-72 h-48 rounded-lg overflow-hidden shadow-2xl flex-shrink-0 transform transition-transform hover:scale-105 hover:-translate-y-1 duration-300"
            style={{
              boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="w-full h-full relative">
              {isLoading ? (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              ) : (
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSliderHome;