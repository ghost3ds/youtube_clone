import React from 'react';
import wallpaper from '../assets/wallpaper.jpg';

const Hero = () => {
  return (
    <div className="bg-[#e3e6e6] h-screen ">
      <div className="w-full flex absolute">
        <img src={wallpaper} alt="wallpaper" className="relative" />
      </div>
    </div>
  );
};

export default Hero;
