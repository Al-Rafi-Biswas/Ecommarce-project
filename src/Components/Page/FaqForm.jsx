import React from "react";

const FaqForm = () => {
  return (
    <div className="flex flex-col md:flex-row p-10 bg-gray-50 min-h-screen mx-auto px-20">
      {/* Left Section */}
      <div className="md:w-1/2 pr-10">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">Generel Information</h2>
        <div className="space-y-6">
          {[
            "Eu dictumst cum at sed euismod condimentum?",
            "Magna bibendum est fermentum eros.",
            "Odio muskana hak eris consekein sceleton?",
            "Elit id blandit sabara boi velit gua mara?",
          ].map((title, index) => (
            <div key={index}>
              <h3 className="font-bold text-indigo-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold text-indigo-900 mb-4">Ask a Question</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name*"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Subject*"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Type Your Message*"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
          ></textarea>
          <button className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaqForm;
