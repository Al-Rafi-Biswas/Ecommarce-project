import React, { useContext } from "react";
import { apiData } from "./ContaxtApi"; // Corrected import

const Hero2 = () => {
  let data = useContext(apiData); // Using correct context

  console.log(data); // Check if data is coming properly

  return (
    <section>
      <div className="container mx-auto px-10 m-10">
        <div>
          <h1 className="flex justify-center items-center font-bold font-[josefin Sans] text-[42px]">
            Featured Products
          </h1>
        </div>
        <div className="flex flex-wrap justify-between mt-5  ">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[23%] gap-5 m-5 bg-[#F8F9FD] p-6 rounded-lg text-center mx-auto"
            >
              {/* Product Image */}
              <div className="flex justify-center">
                <img
                  src={item.thumbnail}
                  alt="Cantilever Chair"
                  className="w-[150px] h-[150px] object-contain"
                />
              </div>

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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
