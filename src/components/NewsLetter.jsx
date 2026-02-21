import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="mt-10 md:mt-20 bg-green-100 rounded-2xl md:rounded-3xl py-10 md:py-16 px-4 sm:px-8 md:px-16 shadow-lg border border-green-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
        Subscribe Newsletter
      </h2>
      <p className="text-gray-700 text-center text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-8">
        Bangladesh 2.0 aims to redefine the nation's trajectory by embracing
        cutting-edge technology, promoting inclusive growth.
      </p>

      <div className="flex justify-center mb-4">
        <div className="flex flex-col sm:flex-row w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-sm">
          <input
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 py-3 md:py-4 px-4 md:px-8 text-gray-600 placeholder-gray-400 focus:outline-none text-sm md:text-base"
          />
          <button className="bg-green-800 hover:bg-green-900 text-white font-semibold px-6 md:px-8 py-3 md:py-4 transition-colors text-sm md:text-base">
            Subscribe
          </button>
        </div>
      </div>

      <p className="text-gray-700 font-medium text-center text-sm">
        We promise not to spam you!
      </p>
    </section>
  );
};

export default NewsLetter;