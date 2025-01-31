import React from "react";
import { FaEnvelope, FaPhone, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  let cartData = useSelector((state) => state.cartItemManager.cartItems);

  return (
    <header className="w-full bg-purple-700 text-white flex justify-between items-center px-40 py-3 container mx-auto">
      {/* Left Section */}
      <div className="flex space-x-6">
        <div className="flex items-center space-x-2">
          <FaEnvelope />
          <span>mhasanul@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone />
          <span>(12345)67890</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex space-x-4 items-center">
        <span className="cursor-pointer">English</span>
        <span className="cursor-pointer">USD</span>
        <span className="cursor-pointer"><Link to="/Login">Login</Link></span>
        <FaHeart className="cursor-pointer" />
        <span className="relative">
          <div className="flex justify-center items-center absolute -top-2 -right-5 h-5 w-5 bg-pink-400 rounded-full ">
            <span className="text-white">{cartData.length}</span>
          </div>
          <Link to="/Cart">
            <FaShoppingCart className="cursor-pointer" />
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
