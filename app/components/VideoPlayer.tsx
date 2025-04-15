"use client";

import React, { useRef, useEffect } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Try to manually play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-[90vh] rounded-xl mt-2"
    >
      <video 
        ref={videoRef}
        className="w-full h-full object-cover opacity-90 rounded-xl mt-2"
        autoPlay 
        loop 
        muted
        playsInline
      >
        <source 
          src="/NewVirsaVideo.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
