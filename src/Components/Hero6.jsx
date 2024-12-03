import React from "react";
import chairImg2 from "../assets/Hero6/img1.png"; // Replace with actual paths
import chairImg3 from "../assets/Hero6/img2.png"; // Replace with actual paths
import chairImg1 from "../assets/Hero6/img3.png"; // Replace with actual paths
import chairImg4 from "../assets/Hero6/img4.png"; // Replace with actual paths

const trendingProducts = [
  {
    image: chairImg1,
    title: "Cantilever chair",
    price: "$36.00",
    oldPrice: "$40.00",
  },
  {
    image: chairImg2,
    title: "Cantilever chair",
    price: "$36.00",
    oldPrice: "$40.00",
  },
  {
    image: chairImg3,
    title: "Cantilever chair",
    price: "$36.00",
    oldPrice: "$40.00",
  },
  {
    image: chairImg4,
    title: "Cantilever chair",
    price: "$36.00",
    oldPrice: "$40.00",
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-40 text-center">
        {/* Heading */}
        <h2 className="text-[42px] font-josefin text-[#151875] mb-12">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {trendingProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-3"
              style={{ height: "350px", width: "270px" }}
            >
              {/* Image */}
              <div
                className="flex justify-center items-center bg-[#F5F6F8]"
                style={{ width: "247px", height: "244px" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-josefin mt-4">{product.title}</h3>

              {/* Price */}
              <div className="flex items-center justify-center gap-4 mt-2">
                <p className="text-[#151875] font-bold">{product.price}</p>
                <p className="text-gray-500 line-through">{product.oldPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
