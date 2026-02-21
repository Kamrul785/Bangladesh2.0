import React from "react";

const questions = [
    "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
    "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
    "Do you believe Bangladesh is on the right path toward becoming a developed nation?",
];

const Opinion = () => {
    return (
        <section className="mt-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Your Opinion Matters</h2>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <div className="bg-white border border-gray-200 overflow-hidden">
                    <div className="flex justify-between bg-green-100 border-b border-gray-300">
                        <div className="px-6 py-4 text-lg font-bold text-gray-900">Questions</div>
                        <div className="px-6 py-4 text-lg font-bold text-gray-900 border-gray-300">
                            Select Your Opinion
                        </div>
                    </div>

                    {questions.map((question, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border-b border-gray-200"
                        >
                            <div className="px-6 py-6 text-gray-900 font-bold">{question}</div>
                            <div className="px-6 py-6 md:border-l md:border-gray-200">
                                <select
                                    className="w-full max-w-[180px] bg-green-50 border border-gray-900 rounded-md px-4 py-2 font-semibold text-gray-900 "
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