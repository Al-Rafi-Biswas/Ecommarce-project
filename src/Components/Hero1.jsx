import React from "react";

import img1 from "../assets/Hero1/image 32.png";
import dot from "../assets/Hero1/Ellipse 62.png";

import shopa from "../assets/Hero1/shopa.png";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0FF] mb-10">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center relative">
          <div className=" w-[60%]   ">
            <img
              className="absolute top-0 flex w-[387px] h-[387px]"
              src={img1}
              alt=""
            />
            <div>
              <img className="absolute top-[85%] left-[7%]" src={dot} alt="" />
            </div>
            <div className=" ml-[35%] mt-20">
              <h3 className="text-[16px] text-pink-500 font-[Lato]">
                Best Furniture For Your Castle....
              </h3>
              <h1 className=" text-[53px] mt-3 font-bold] font-sans">
                New Furniture Collection Trends in 2020
              </h1>
              <p className="text-[17px] text-[#8A8FB9] font-[Lato] py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button className="mt-5 px-6 py-2 text-white text-[17px] bg-pink-500 rounded hover:bg-pink-600 transition font-[Josefin Sans]">
                Shop Now
              </button>
            </div>
          </div>
          <div className=" w-[40%] ">
            <img className=" mt-5 w-[706px] h-[600px]" src={shopa} alt="" />
            {/* <img
              className="w-[550px] h-[600px] mt-4 pt-8"
              style={{
                backgroundImage: `url(${groupback})`,
              }}
              src={img2}
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
