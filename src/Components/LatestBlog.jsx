import React from "react";
import { FaCalendarAlt, FaPenNib } from "react-icons/fa"; // Import icons
import Img from "../assets/LatestBlog/Lb-1.jpg";
import Img2 from "../assets/LatestBlog/Lb-2.jpg";
import Img3 from "../assets/LatestBlog/Lb-3.jpg";

const LatestBlog = () => {
  return (
    <div className="container mx-auto px-20 py-12">
      <h2 className=" font-bold text-4xl font-[Josefin Sans] mb-10 text-[#151875] text-center">
        Latest Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="w-[370px] mx-auto p-4 shadow-sm">
          <div className="relative mb-6 ">
            <img
              src={Img}
              alt="blog image"
              className="w-full h-[255px] object-cover rounded-md"
            />
          </div>
          <div className="flex items-center text-sm text-[#8A8FB9]">
            <FaPenNib className="mr-2 text-[#FB2E86]" />
            <span className="font-[Josefin Sans] text-[14px]">SaberAli</span>
            <FaCalendarAlt className="mx-2 text-[#FFA454]" />
            <span className="font-[Josefin Sans] text-[14px]">
              21 August 2020
            </span>
          </div>
          <h3 className="text-xl font-[Josefin Sans] mt-3 text-[#151875]">
            Top essential trends in 2021
          </h3>
          <p className="text-[16px] font-[Lato] text-[#8A8FB9] mt-3">
            More of this less hello salmandale field much over tightly circa
            horse taped nightly.
          </p>
          <a
            href="#"
            className="mt-4 inline-block underline-offset-2 text-[#151875] text-[16px] font-[Lato]"
          >
            Read More
          </a>
        </div>

        {/* Card 2 */}
        <div className="w-[370px] mx-auto p-4 shadow-sm">
          <div className="relative mb-6 ">
            <img
              src={Img2}
              alt="blog image"
              className="w-full h-[255px] object-cover rounded-md"
            />
          </div>
          <div className="flex items-center text-sm text-[#8A8FB9]">
            <FaPenNib className="mr-2 text-[#FB2E86]" />
            <span className="font-[Josefin Sans] text-[14px]">Surfvision</span>
            <FaCalendarAlt className="mx-2 text-[#FFA454]" />
            <span className="font-[Josefin Sans] text-[14px]">
              21 August 2020
            </span>
          </div>
          <h3 className="text-xl font-[Josefin Sans] mt-3 text-[#FB2E86]">
            Top essential trends in 2021
          </h3>
          <p className="text-[16px] font-[Lato] text-[#8A8FB9] mt-3">
            More of this less hello salmandale field much over tightly circa
            horse taped nightly.
          </p>
          <a
            href="#"
            className="mt-4 inline-block underline-offset-2 text-pink-500 text-[16px] font-[Lato]"
          >
            Read More
          </a>
        </div>

        {/* Card 3 */}
        <div className="w-[370px] mx-auto p-4 shadow-sm">
          <div className="relative mb-6 ">
            <img
              src={Img3}
              alt="blog image"
              className="w-full h-[255px] object-cover rounded-md"
            />
          </div>
          <div className="flex items-center text-sm text-[#8A8FB9]">
            <FaPenNib className="mr-2 text-[#FB2E86]" />
            <span className="font-[Josefin Sans] text-[14px]">SaberAli</span>
            <FaCalendarAlt className="mx-2 text-[#FFA454]" />
            <span className="font-[Josefin Sans] text-[14px]">
              21 August 2020
            </span>
          </div>
          <h3 className="text-xl font-[Josefin Sans] mt-3 text-[#151875]">
            Top essential trends in 2021
          </h3>
          <p className="text-[16px] font-[Lato] text-[#8A8FB9] mt-3">
            More of this less hello salmandale field much over tightly circa
            horse taped nightly.
          </p>
          <a
            href="#"
            className="mt-4 inline-block  underline-offset-2 text-[#151875] text-[16px] font-[Lato]"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
