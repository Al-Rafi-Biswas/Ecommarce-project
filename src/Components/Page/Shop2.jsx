import React, { useState, useContext } from "react";
import { apiData } from "../ContaxtApi"; // Corrected import
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaRegStar,
  FaSearch,
  FaCheck,
} from "react-icons/fa"; // Icons for product actions

const Shop2 = () => {
  const data = useContext(apiData); // Using correct context

  const [selectedBrands, setSelectedBrands] = useState({
    coasterFurniture: false,
    fusionDot: false,
    uniqueFurniture: false,
    dreamFurniture: false,
    youngRepurposed: false,
    greenDIY: false,
  });

  const handleCheckboxChange = (brand) => {
    setSelectedBrands((prevState) => ({
      ...prevState,
      [brand]: !prevState[brand],
    }));
  };

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-8 lg:px-20 mt-5 mb-5">
        <div className="flex justify-between items-start gap-10">
          {/* Left Column: Filters */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            {/* Product Brand Section */}
            <h2 className="text-[#151875] text-2xl font-[Josefin Sans] mb-4">
              Product Brand
            </h2>
            <div className="space-y-4">
              {[
                { id: "coasterFurniture", label: "Coaster Furniture" },
                { id: "fusionDot", label: "Fusion Dot High Fashion" },
                { id: "uniqueFurniture", label: "Unique Furniture Restor" },
                { id: "dreamFurniture", label: "Dream Furniture Flipping" },
                { id: "youngRepurposed", label: "Young Repurposed" },
                { id: "greenDIY", label: "Green DIY Furniture" },
              ].map(({ id, label }) => (
                <label
                  key={id}
                  className="flex items-center text-[#FF3EB2] text-sm font-[Lato]"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands[id]}
                    onChange={() => handleCheckboxChange(id)}
                    className="hidden"
                  />
                  <div
                    className={`w-5 h-5 mr-2 border-2 border-[#3b3b3b] rounded-sm flex items-center justify-center ${
                      selectedBrands[id]
                        ? "bg-[#FF3EB2]" // Background color when checked
                        : "" // No background when unchecked
                    }`}
                  >
                    {selectedBrands[id] && <FaCheck className="text-white" />}
                  </div>
                  {label}
                </label>
              ))}
            </div>

            {/* Discount Offer Section */}
            <h2 className="text-[#151875] text-2xl font-[Josefin Sans]  mb-4 mt-10">
              Discount Offer
            </h2>
            <div className="space-y-4 text-[#FF3EB2] text-md font-[Lato]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FF3EB2" }}
                />
                20% Cashback
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FF3EB2" }}
                />
                5% Cashback Offer
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FF3EB2" }}
                />
                25% Discount Offer
              </label>
            </div>

            {/* Rating Item Section */}
            <h2 className="text-[#151875] text-2xl font-[Josefin Sans]  mb-4 mt-10">
              Rating Item
            </h2>
            <div className="space-y-4 text-[#FFCC2E] text-md font-[Lato]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FFCC2E" }}
                />
                ★★★★☆
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FFCC2E" }}
                />
                ★★★☆☆
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FFCC2E" }}
                />
                ★☆☆☆☆
              </label>
            </div>

            {/* Categories Section */}
            <h2 className="text-[#151875] text-2xl font-[Josefin Sans]  mb-4 mt-10">
              Categories
            </h2>
            <div className="space-y-4 text-[#FF3EB2] text-md font-[Lato]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FF3EB2" }}
                />
                Prestashop
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FF3EB2" }}
                />
                Magento
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FF3EB2" }}
                />
                Bigcommerce
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FF3EB2" }}
                />
                osCommerce
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FF3EB2" }}
                />
                3dCart
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  style={{ backgroundColor: "#FF3EB2" }}
                />
                whatcs
              </label>
            </div>

            {/* Price Filter Section */}
            <h2 className="text-[#151875] text-2xl font-[Josefin Sans]  mb-4 mt-10">
              Price Filter
            </h2>
            <div className="space-y-4 text-[#FF3EB2] text-md font-[Lato]">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                15000$ - 20000$
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                10000$ - 15000$
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                5000$ - 10000$
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                1000$ - 5000$
              </label>
              <label className="flex items-center">
                <input
                  type="text"
                  className="py-2 border-2 border-red-300 rounded-md focus:border-pink-500 focus:outline-none"
                  placeholder="1000$-5000$"
                />
              </label>
            </div>
            {/* Filter by color */}
            <h2 className="text-[#151875] text-2xl font-[Josefin Sans] mb-4  mt-10">
              Filter By Color
            </h2>
            <div className="space-y-4">
              {/* Color Filter 1: Blue */}
              <label className="flex items-center text-[#3b3b3b] text-sm font-[Lato]">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 mr-2 border-2 border-blue-500 rounded-full peer-checked:border-[#151875]">
                  <span className="block w-full h-full bg-blue-500 rounded-full"></span>
                </div>
                Blue
              </label>

              {/* Color Filter 2: Orange */}
              <label className="flex items-center text-[#3b3b3b] text-sm font-[Lato]">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 mr-2 border-2 border-orange-500 rounded-full peer-checked:border-[#151875]">
                  <span className="block w-full h-full bg-orange-500 rounded-full"></span>
                </div>
                Orange
              </label>

              {/* Color Filter 3: Green */}
              <label className="flex items-center text-[#3b3b3b] text-sm font-[Lato]">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 mr-2 border-2 border-green-500 rounded-full peer-checked:border-[#151875]">
                  <span className="block w-full h-full bg-green-500 rounded-full"></span>
                </div>
                Green
              </label>

              {/* Color Filter 4: Purple */}
              <label className="flex items-center text-[#3b3b3b] text-sm font-[Lato]">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 mr-2 border-2 border-purple-500 rounded-full peer-checked:border-[#151875]">
                  <span className="block w-full h-full bg-purple-500 rounded-full"></span>
                </div>
                Purple
              </label>

              {/* Color Filter 5: Sky */}
              <label className="flex items-center text-[#3b3b3b] text-sm font-[Lato]">
                <input type="checkbox" className="hidden peer" />
                <div className="w-5 h-5 mr-2 border-2 border-sky-500 rounded-full peer-checked:border-[#151875]">
                  <span className="block w-full h-full bg-sky-500 rounded-full"></span>
                </div>
                Sky
              </label>
            </div>
          </div>

          {/* Right Column: Product List */}
          <div className="flex flex-wrap gap-10 w-full">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center shadow-md p-4 mb-8 w-[313px] bg-white rounded-lg"
              >
                {/* Product Image */}
                <div className="w-full h-[217px] overflow-hidden mb-4 rounded-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </div>

                {/* Product Details */}
                <div className="text-center">
                  {/* Product Title and Color Dots */}
                  <div className="flex items-center justify-center mb-2">
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
                  <p className="text-[16px] text-[#9295AA] font-Lato mb-3">
                    {item.description}
                  </p>

                  {/* Price Section */}
                  <div className="flex items-center justify-center gap-2 mb-3">
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
                  <div className="flex gap-4 justify-center mb-3">
                    <FaShoppingCart className="hover:text-[#FB2E86] cursor-pointer" />
                    <FaHeart className="hover:text-[#FB2E86] cursor-pointer" />
                    <FaSearch className="hover:text-[#FB2E86] cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop2;
