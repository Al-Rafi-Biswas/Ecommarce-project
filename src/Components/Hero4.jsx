import React from "react";

// Importing local images
import img1 from "../assets/Hero4/img1.png";
import img2 from "../assets/Hero4/img2.png";
import img3 from "../assets/Hero4/img3.png";
import img4 from "../assets/Hero4/img4.png";

// Features Array
const features = [
  {
    image: img1, // Use imported image
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: img2, // Use imported image
    title: "Reliable Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: img3, // Use imported image
    title: "High Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    image: img4, // Use imported image
    title: "Fast Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

const Hero4 = () => {
  return (
    <section className="mt-8 mb-8">
      <div className="container mx-auto px-20">
        <div className="p-6 font-lato">
          {/* Heading */}
          <h2 className="text-[42px] font-josefin text-center mb-8">
            What Shopex Offer!
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 text-center rounded-lg"
                style={{ height: "320px", width: "270px", margin: "auto" }}
              >
                {/* Image */}
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-[65px] w-[65px] object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-josefin text-[22px] mt-5 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[16px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
