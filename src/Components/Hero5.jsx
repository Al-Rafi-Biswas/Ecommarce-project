import React from "react";
import ChairImage from "../assets/Hero5/shopa.png"; // Replace with your actual image path

const ProductFeature = () => {
  return (
    <section className="bg-[#F1F0FF] py-12 mt-8 mb-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 ">
        {/* Image Section */}
        <div
          className="flex justify-center items-center"
          style={{ width: "558px", height: "550px" }}
        >
          <img
            src={ChairImage}
            alt="Chair"
            className="object-contain h-full w-full"
          />
        </div>

        {/* Text Section */}
        <div className="lg:ml-12 mt-8 lg:mt-0 text-center lg:text-left">
          {/* Heading */}
          <h2
            className="text-[35px] font-josefin font-bold mb-6"
            style={{ color: "#000000" }}
          >
            Unique Features Of Latest & Trending Products
          </h2>

          {/* Features List */}
          <ul className="space-y-4 text-[16px] text-gray-700 font-lato">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-[#FB2E86] rounded-full mr-4"></span>
              All frames constructed with hardwood solids and laminates
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-[#2B2BF5] rounded-full mr-4"></span>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-[#2BF5CC] rounded-full mr-4"></span>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>

          {/* Button and Price */}
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4">
            {/* Button */}
            <button
              className="bg-[#FB2E86] text-white text-[16px] font-lato py-2 px-4 rounded"
              style={{ width: "157px", height: "45px" }}
            >
              Add To Cart
            </button>

            {/* Product Info */}
            <div className="mt-4 sm:mt-0 text-[16px] font-lato text-gray-700">
              <p className="font-bold">B&B Italian Sofa</p>
              <p>$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
