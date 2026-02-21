import React, { useState } from "react";

const amounts = [100, 200, 500, 1000];

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(200);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <section className="mt-10 bg-gray-100 rounded-2xl py-8 md:py-12 px-4 sm:px-8 md:px-16">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
        Donate Today    
      </h2>
      <p className="text-gray-600 text-center text-sm md:text-base max-w-6xl mx-auto mb-6 md:mb-8">
        Bangladesh 2.0 aims to redefine the nation's trajectory by embracing
        cutting-edge technology, promoting inclusive growth, and ensuring
        sustainability. With initiatives in renewable energy, digital
        transformation, and robust infrastructure.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-6">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleAmountClick(amount)}
            className={`py-4 sm:py-6 md:py-8 px-2 sm:px-4 rounded-xl text-lg sm:text-xl md:text-2xl font-bold transition-all ${
              selectedAmount === amount
                ? "bg-green-200 border-2 border-green-700 text-gray-900"
                : "bg-white border border-gray-300 text-gray-900 hover:border-green-500"
            }`}
          >
            {amount} Taka
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="number"
          placeholder="Other Amount (Taka)"
          value={customAmount}
          onChange={handleCustomAmountChange}
          className="w-full py-4 px-6 rounded-xl border border-gray-300 text-center text-gray-500 placeholder-gray-400 focus:outline-none focus:border-green-500"
        />
      </div>

      <div className="text-center">
        <button className="bg-green-800 hover:bg-green-900 text-white font-semibold py-3 px-10 rounded-lg transition-colors">
          Done Now
        </button>
      </div>
    </section>
  );
};

export default Donation;