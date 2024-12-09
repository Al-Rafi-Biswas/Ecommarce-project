import React, { useContext } from "react";
import { apiData } from "./ContaxtApi"; // Corrected import

import Slider from "react-slick";

const Hero2 = () => {
  let data = useContext(apiData); // Using correct context

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(data); // Check if data is coming properly

  return (
    <section>
      <div className="container mx-auto px-20 m-10">
        <div>
          <h1 className="flex justify-center items-center font-bold font-[josefin Sans] text-[42px]">
            Featured Products
          </h1>
        </div>
        <div className="  ">
          <Slider {...settings}>
            {data.map((item) => (
              <div
                key={item.id}
                className="w-[23%] gap-5 m-5  p-8 rounded-lg text-center mx-auto"
              >
                {/* Product Image */}
                <div className="flex justify-center shadow-sm bg-[#F6F7FB]">
                  <img
                    src={item.thumbnail}
                    alt="Cantilever Chair"
                    className="w-[150px] h-[150px] object-contain"
                  />
                </div>
                <div className="shadow-md">
                  {/* Product Title */}
                  <h3 className="text-[18px] font-bold text-[#FB2E86] mt-4">
                    {item.title}
                  </h3>

                  {/* Color Dots */}
                  <div className="flex justify-center space-x-2 mt-3">
                    <span className="w-3 h-3 bg-[#07A7E9] rounded-full"></span>
                    <span className="w-3 h-3 bg-[#49AC58] rounded-full"></span>
                    <span className="w-3 h-3 bg-[#7E33E0] rounded-full"></span>
                  </div>

                  {/* Product Code */}
                  <p className="text-[#8A8FB9] text-[14px] mt-3">
                    Code - <span className="text-[#151875]">Y523201</span>
                  </p>
                  <p className="text-[#8A8FB9] text-[14px] mt-3">
                    Price - <span className="text-[#151875]">{item.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
