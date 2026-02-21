import React from "react";

const questions = [
    "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
    "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
    "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
];

const Opinion = () => {
    return (
        <section className="mt-10 md:mt-20">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Your Opinion Matters</h2>
            <div className="bg-gray-50 rounded-2xl p-4 md:p-6 lg:p-8">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    {/* Header - hidden on mobile */}
                    <div className="hidden md:flex justify-between bg-green-100 border-b border-gray-300">
                        <div className="px-6 py-4 text-lg font-bold text-gray-900">Questions</div>
                        <div className="px-6 py-4 text-lg font-bold text-gray-900 border-gray-300">
                            Select Your Opinion
                        </div>
                    </div>

                    {questions.map((question, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200 p-4 md:p-0"
                        >
                            <div className="md:px-6 md:py-6 text-gray-900 font-bold text-sm md:text-base mb-3 md:mb-0">{question}</div>
                            <div className="md:px-6 md:py-6 md:border-l md:border-gray-200">
                                <select
                                    className="w-full md:w-auto md:max-w-[180px] bg-green-50 border border-gray-900 rounded-md px-4 py-2 font-semibold text-gray-900 text-sm md:text-base"
                                    defaultValue="yes"
                                >
                                    <option value="yes">Yes, I Agree</option>
                                    <option value="no">No, I Disagree</option>
                                    <option value="neutral">Neutral</option>
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Opinion;