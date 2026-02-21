import React from "react";
import bgimg from "../assets/quote-bg.png";

const Speach = () => {
    return (
        <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mt-10">
            <div className="relative">
                <img
                    src={bgimg}
                    alt="Quote"
                    className="absolute left-0 top-0 w-18 h-18 opacity-100"
                />
                <p className="text-gray-700 text-md leading-relaxed  pt-4 md:pt-6">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas,
                    ducimus labore sequi quos deserunt optio id repellendus tempora veniam
                    amet porro corporis exercitationem numquam debitis culpa laudantium
                    odio, velit vel minus sit? Veritatis aut maiores ducimus fugit error ex
                    sit, dignissimos eum tempora perferendis a rem culpa ab aliquid modi?
                    Est vitae neque esse, cumque, quam tenetur rem earum eaque mollitia
                    modi ipsum aspernatur, dignissimos excepturi aliquam architecto soluta
                    necessitatibus vero?"
                </p>
            </div>
            <div className="mt-2">
                <h3 className="text-xl font-bold text-gray-900">Dr. Muhammad Yunus</h3>
                <p className="text-gray-600">Chief Adviser of the People's Republic of Bangladesh</p>
            </div>
        </section>
    );
};

export default Speach;