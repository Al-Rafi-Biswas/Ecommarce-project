import React, { useContext, useEffect, useState } from "react";
import { apiData } from "../ContaxtApi"; // Corrected import
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaRegStar,
  FaSearch,
} from "react-icons/fa"; // Icons for product actions
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/CartSlice";

const Shop2 = ({ currentPageProducts }) => {
  const data = useContext(apiData); // Using correct context
  // categoryitems logic.....................
  let [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  let [categoryItem, setCategoryItem] = useState([]);

  const handelCategory = (cat) => {
    let filterProducts = data.filter((item) => item.category === cat);
    setCategoryItem(filterProducts);
  };
  // categoryitems logic.....................

  // branditems logic.....................

  let [brand, setBrand] = useState([]);
  useEffect(() => {
    setBrand([...new Set(data.map((item) => item.brand))]);
  }, [data]);

  let [brandItem, setBrandItem] = useState([]);

  const handelBrand = (cat) => {
    let filterbrandProducts = data.filter((item) => item.brand === cat);
    setCategoryItem(filterbrandProducts);
  };

  // branditems logic.....................

  // priceitem logic....................

  let [PriceItem, setPriceItem] = useState([]);
  const handelPriceProducts = (low, high) => {
    let filterPriceProducts = data.filter(
      (item) => item.price > low && item.price <= high
    );
    setPriceItem(filterPriceProducts);
  };
  console.log(currentPageProducts);

  // price item logic..................
  // if(currentPageProducts.length >0 ){
  //   console.log(currentPageProducts);

  // }

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, qty: 1 }));

    toast.success('Added to cart!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  };

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-8 lg:px-20 mt-5 mb-5">
        <div className="flex justify-between items-start gap-10">
          {/* Left Column: Filters */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            {/* Product Brand Section */}
            <h2 className="text-[#151875] text-2xl font-[Josefin Sans] mb-4">
              Category Item
            </h2>

            <div className="space-y-4 text-[#FF3EB2] text-md font-[Lato]">
              <ul>
                {category.map((categoris) => (
                  <li
                    key={categoris}
                    className="flex items-center gap-3 capitalize cursor-pointer text-[16px]"
                  >
                    <input
                      onClick={() => handelCategory(categoris)}
                      type="checkbox"
                    />
                    {categoris}
                  </li>
                ))}
              </ul>
            </div>

            {/* Discount Offer Section */}
            <h2 className="text-[#151875] text-2xl font-[Josefin Sans]  mb-4 mt-10">
              Discount Offer
            </h2>
            <div className="space-y-4 text-[#FF3EB2] text-md font-[Lato]">
              <ul>
                <li className="flex items-center gap-3 capitalize cursor-pointer text-[16px]">
                  <input type="checkbox" />
                  20% Cashback
                </li>
                <li className="flex items-center gap-3 capitalize cursor-pointer text-[16px]">
                  <input type="checkbox" />
                  20% Cashback
                </li>
                <li className="flex items-center gap-3 capitalize cursor-pointer text-[16px]">
                  <input type="checkbox" />
                  5% Cashback Offer
                </li>
                <li className="flex items-center gap-3 capitalize cursor-pointer text-[16px]">
                  <input type="checkbox" />
                  25% Discount Offer
                </li>
              </ul>
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
              Product Brand
            </h2>
            <div className="space-y-4 text-[#FF3EB2] text-md font-[Lato]">
              <ul>
                {brand.map((brands) => (
                  <li
                    key={brands}
                    className="flex items-center gap-3 capitalize cursor-pointer text-[16px]"
                  >
                    <input
                      onClick={() => handelBrand(brands)}
                      type="checkbox"
                    />
                    {brands}
                  </li>
                ))}
              </ul>

              {/* <ul>
                <li className="flex items-center gap-3 capitalize cursor-pointer text-[16px]">
                  <input type="checkbox" />
                  Prestashop
                </li>
                <li className="flex items-center gap-3 capitalize cursor-pointer text-[16px]">
                  <input type="checkbox" />
                  Magento
                </li>
                <li className="flex items-center gap-3 capitalize cursor-pointer text-[16px]">
                  <input type="checkbox" />
                  Bigcommerce
                </li>
                <li className="flex items-center gap-3 capitalize cursor-pointer text-[16px]">
                  <input type="checkbox" />
                  osCommerce
                </li>
                <li className="flex items-center gap-3 capitalize cursor-pointer text-[16px]">
                  <input type="checkbox" />
                  3dCart
                </li>
                <li className="flex items-center gap-3 capitalize cursor-pointer text-[16px]">
                  <input type="checkbox" />
                  whatcs
                </li>
              </ul> */}
            </div>

            {/* Price Filter Section */}
            <h2 className="text-[#151875] text-2xl font-[Josefin Sans]  mb-4 mt-10">
              Price Filter
            </h2>
            <div className="space-y-4 text-[#FF3EB2] text-md font-[Lato]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handelPriceProducts(0, 100.0)}
                  className="mr-2"
                />
                0.00$ - 100.00$
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handelPriceProducts(100.01, 200)}
                  className="mr-2"
                />
                100.01$ - 200.00$
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handelPriceProducts(200.01, 500)}
                  className="mr-2"
                />
                200.01$ - 500$
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => handelPriceProducts(500.01, 1500)}
                  className="mr-2"
                />
                500.01$ - 15000$
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
            {/* category item er jonno */}
            {categoryItem.length > 0
              ? categoryItem.map((item) => (
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
                ))
              : PriceItem.length > 0
              ? PriceItem.map((item) => (
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
                ))
              : brandItem.length > 0
              ? brandItem.map((item) => (
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
                ))
              : currentPageProducts.map((item) => (
                  <div
                    key={item.id}
                    className="shadow-md p-4 mb-8 w-[313px] bg-white rounded-lg"
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
                        <FaShoppingCart
                          onClick={() => handleAddToCart(item)}
                          className="hover:text-[#FB2E86] cursor-pointer"
                        />
                        <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick={false}
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light"
                        
                        />
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
