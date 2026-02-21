import React from "react";
import heroImag from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="bg-green-100 rounded-2xl p-15 mt-5 shadow-lg border border-green-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-160">
          <h2 className="text-lg font-bold text-gray-500">Bangladesh 2.0</h2>
          <p className="text-5xl font-bold mt-4 mb-6">
            Idea, innovation, vision and challenges in New Bangladesh.
          </p>
          <button className="bg-green-800 text-white font-bold text-lg py-3 px-8 border-2 shadow-lg border-green-800 rounded-lg cursor-pointer">
            Explore New Bangladesh
          </button>
        </div>
        <div>
          <img src={heroImag} alt="Hero" className="w-full max-w-[400px] md:max-w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
