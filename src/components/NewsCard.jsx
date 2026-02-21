import React from "react";

const NewsCard = ({
  image,
  logo,
  title,
  date,
  time,
  description,
  reverse = false,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-6 md:gap-8`}
      >
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div className="w-full md:flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <img src={logo} alt="News Source" />
          </div>
          <p className="text-sm font-semibold text-gray-500 mt-1">
            Date: {date} &nbsp; Time: {time}
          </p>
          <p className="text-gray-600 text-md mt-4 leading-relaxed">
            {description}
          </p>
          <button className="mt-4 bg-green-800 hover:bg-green-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
