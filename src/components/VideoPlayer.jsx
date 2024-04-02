import React, { useState, useRef } from 'react';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseOver = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseUp = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <video className='w-[300px] rounded-[20px]'
      ref={videoRef}
      src={src}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseUp}
    />
  );
};

export default VideoPlayer;
