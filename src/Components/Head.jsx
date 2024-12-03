import React from "react";
import { FaEnvelope, FaPhone, FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
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
        <span className="cursor-pointer">Login</span>
        <FaHeart className="cursor-pointer" />
        <FaShoppingCart className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
