import React from "react";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/x.png";

const Footer = () => {
  return (
    <footer className="mt-10 md:mt-20 py-8 md:py-10 bg-gray-50 px-4">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
        Bangladesh 2.0
      </h2>
      <hr className="border-gray-300 max-w-4xl mx-auto mb-6" />
      <div className="flex justify-center items-center gap-6">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <img src={facebookIcon} alt="Facebook" className="w-7 h-7" />
        </a>
        <a href="#" className="hover:opacity-80 transition-opacity">
          <img src={instagramIcon} alt="Instagram" className="w-7 h-7" />
        </a>
        <a href="#" className="hover:opacity-80 transition-opacity">
          <img src={twitterIcon} alt="X" className="w-7 h-7" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
