"use client";

import React, { useRef } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      >
        <source 
          src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      

      
    </div>
  );
};

export default VideoPlayer;
