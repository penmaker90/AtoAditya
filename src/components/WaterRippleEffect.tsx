import React from 'react';
import waterRippleVideo from '@/assets/water ripple.mp4';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video
        className="video-background-element"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={waterRippleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;