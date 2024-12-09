import React from "react";
import img5 from "../assets/Hero6/img5.png";
import img6 from "../assets/Hero6/img6.png";
import img7 from "../assets/Hero6/img7.png";
import img8 from "../assets/Hero6/img8.png";
import img9 from "../assets/Hero6/img9.png";

const Hero6_2 = () => {
  return (
    <>
      <section className="mb-16">
        <div className="container mx-auto px-auto">
          <div className="flex justify-center gap-8 items-center">
            {/* First Div */}
            <div
              className="bg-[#FFF6FB] p-6 flex flex-col justify-between relative"
              style={{ width: "420px", height: "270px" }}
            >
              <h1 className="text-[#151875] text-[26px]">
                23% off in all products
              </h1>
              <a
                className="absolute left-5 top-20 
                text-[#FB2E86] text-[16px] underline"
                href="#"
              >
                Shop Now
              </a>
              <img
                className="absolute bottom-4 right-4 w-[213px] h-[207px]"
                src={img5}
                alt="Product Image"
              />
            </div>
            {/* Second Div */}
            <div
              className="bg-[#EEEFFB] p-6 flex flex-col justify-between relative"
              style={{ width: "420px", height: "270px" }}
            >
              <h1 className="text-[#151875] text-[26px]">
                23% off in all products
              </h1>
              <a
                className=" absolute left-5 top-20 text-[#FB2E86] text-[16px] underline"
                href="#"
              >
                Shop Now
              </a>
              <img
                className="absolute bottom-4 right-4 w-[213px] h-[207px]"
                src={img6}
                alt="Product Image"
              />
            </div>
            {/* Third Div */}
            <div className="p-4">
              <div className="flex flex-col gap-4">
                <div className="flex justify-start items-center gap-6">
                  <img
                    src={img7}
                    className="w-[64px] h-[71px] bg-[#F5F6F8]"
                    alt="Small Product"
                  />
                  <div>
                    <h3 className="text-[16px] text-[#151875] font-[Josefin Sans]">
                      Executive Seat Chair
                    </h3>
                    <h4 className="text-[12px] text-[#151875] font-[Lato]">
                      $32.00
                    </h4>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-6">
                  <img
                    src={img8}
                    className="w-[64px] h-[71px] bg-[#F5F6F8]"
                    alt="Small Product"
                  />
                  <div>
                    <h3 className="text-[16px] text-[#151875] font-[Josefin Sans]">
                      Executive Seat Chair
                    </h3>
                    <h4 className="text-[12px] text-[#151875] font-[Lato]">
                      $32.00
                    </h4>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-6">
                  <img
                    src={img9}
                    className="w-[64px] h-[71px] bg-[#F5F6F8]"
                    alt="Small Product"
                  />
                  <div>
                    <h3 className="text-[16px] text-[#151875] font-[Josefin Sans]">
                      Executive Seat Chair
                    </h3>
                    <h4 className="text-[12px] text-[#151875] font-[Lato]">
                      $32.00
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero6_2;
