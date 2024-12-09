import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import img1 from "../assets/Hero7/img1.png";

const Hero7 = () => {
  return (
    <section className="container mx-auto px-20">
      <div>
        <h1 className="text-[42px] font-josefin font-semibold text-center">
          Discount Item
        </h1>
        <div className="mt-8">
          <ul className="flex justify-center items-center font-Lato text-16px gap-5">
            <li className="hover:text-[#FB2E86]  ">Wood Chair</li>
            <li className="hover:text-[#FB2E86]  ">Plastic Chair</li>
            <li className="hover:text-[#FB2E86]  ">Sofa Colletion</li>
          </ul>
        </div>
      </div>
      <div className="bg-white py-10 px-4 md:px-10 lg:flex lg:items-center lg:justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-blue-900 font-josefin">
            20% Discount Of All Products
          </h1>
          <h2 className="text-[#FB2E86] text-lg font-josefin">
            Eoms Sofa Compact
          </h2>
          <p className="text-gray-600 text-base font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm font-lato">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#FB2E86]" />
              <span>Material expose like metals</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#FB2E86]" />
              <span>Clear lines and geometric figures</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#FB2E86]" />
              <span>Simple neutral colours</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#FB2E86]" />
              <span>Material expose like metals</span>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#FB2E86] text-white font-lato px-6 py-2 mt-4 rounded hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0">
          <img
            src={img1} // Replace with your image URL
            alt="Product"
            className="w-[699px] h-[595px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero7;
