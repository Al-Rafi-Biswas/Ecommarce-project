import React, { useContext } from "react";
import { apiData } from "./ContaxtApi";
import Slider from "react-slick";

const Hero8 = () => {
  const data = useContext(apiData);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 5,
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

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <section className="container mx-auto px-20 py-20">
      <h2 className="text-center text-[42px] font-bold text-blue-900 font-josefin mb-8">
        Top Categories
      </h2>

      <div>
        <Slider {...settings}>
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center  p-2"
              style={{ width: "270px", height: "345px" }} // Fixed width and height for each item
            >
              {/* Product Image */}
              <div className="w-50 h-48 bg-[#F6F7FB] flex items-center justify-center rounded-[50%]  p-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>

              {/* Product Title and Price */}
              <div className="mt-4 text-center">
                <h3 className="text-sm font-josefin text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm font-lato text-gray-600">${item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero8;
