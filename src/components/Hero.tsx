import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 mt-8 sm:h-screen">
    
      <div className="bg-[#2A254B] flex flex-col items-start justify-center w-full sm:w-1/2 px-4 sm:pl-16 text-white rounded-md h-auto sm:h-full">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8 leading-tight">
          The furniture brand for the future, with timeless designs
        </h1>
        <Link href="/products"><button  className="bg-white text-[#444285] px-6 sm:px-8 py-2 sm:py-3 rounded mb-4 sm:mb-8">
          View Collection
        </button></Link>
        <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg">
          A new era in eco-friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way to
          display things digitally using modern web technologies.
        </p>
      </div>

      
      <div className="w-full sm:w-1/2 h-auto sm:h-full flex items-center justify-center relative mt-4 sm:mt-0">
        <img
          src="/Product Card.png"
          alt="The Dandy Chair"
          className="w-full  sm:w-auto h-auto sm:h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;


