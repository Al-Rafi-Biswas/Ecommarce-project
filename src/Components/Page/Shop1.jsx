import React, { useContext } from "react";
import { apiData } from "../ContaxtApi"; // Corrected import
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaRegStar,
  FaTag,
  FaSearch,
  FaShareAlt,
} from "react-icons/fa"; // Additional icons for product actions

const Shop1 = () => {
  let data = useContext(apiData); // Using correct context

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-8 lg:px-20 mt-5 mb-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex gap-5 justify-center items-center shadow-md p-4 mb-8"
          >
            {/* Product Image */}
            <div className="flex-shrink-0">
              <img
                className="w-[313px] h-[217px] object-cover"
                src={item.thumbnail}
                alt={item.title}
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              {/* Product Title and Color Dots */}
              <div className="flex items-center mb-2">
                <h2 className="text-[20px] font-josefin text-[#111C85]">
                  {item.title}
                </h2>
                <div className="flex gap-2 ml-4">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-[17px] text-[#9295AA] font-Lato mb-3">
                {item.description}
              </p>

              {/* Price Section */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[22px] font-semibold text-[#111C85]">
                  ${item.discountPercentage}
                </span>
                <span className="text-sm line-through text-[#FB2E86]">
                  ${item.price}
                </span>

                {/* Ratings */}
                <div className="flex items-center gap-1 mb-3">
                  <FaStar className="text-[#FFC416]" />
                  <FaStar className="text-[#FFC416]" />
                  <FaStar className="text-[#FFC416]" />
                  <FaStar className="text-[#FFC416]" />
                  <FaRegStar className="text-[#9295AA]" />
                </div>
              </div>

              {/* Icons for Cart, Wishlist, and Additional Actions */}
              <div className="flex gap-4 mb-3">
                <FaShoppingCart className="hover:text-[#FB2E86]   cursor-pointer" />
                <FaHeart className="hover:text-[#FB2E86]   cursor-pointer" />
                <FaSearch className="hover:text-[#FB2E86]   cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop1;
