import React from "react";
import imghero9 from "../assets/Hero9/hero9.png";
import imghero10 from "../assets/Hero9/hero10.png";

const SubscribeSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <div
            className="flex flex-col items-center justify-center h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${imghero9})` }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[Josefin Sans] text-[#151875] text-center">
              Get Latest Update By Subscribe <br /> Our Newsletter
            </h2>
            <button className="mt-5 px-6 py-2 text-white text-[17px] bg-pink-500 rounded hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>
        </div>
        <div className="py-6 flex justify-center">
          <img src={imghero10} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
