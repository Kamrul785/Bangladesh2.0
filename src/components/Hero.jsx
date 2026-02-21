import React from "react";
import heroImag from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="bg-green-100 rounded-2xl p-6 sm:p-10 lg:p-16 mt-5 shadow-lg border border-green-50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-1/2 lg:max-w-xl text-center md:text-left">
          <h2 className="text-base md:text-lg font-bold text-gray-500">Bangladesh 2.0</h2>
          <p className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-4 mb-6">
            Idea, innovation, vision and challenges in New Bangladesh.
          </p>
          <button className="bg-green-800 text-white font-bold text-sm sm:text-base lg:text-lg py-2 sm:py-3 px-6 sm:px-8 border-2 shadow-lg border-green-800 rounded-lg cursor-pointer">
            Explore New Bangladesh
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={heroImag} alt="Hero" className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
