import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="w-full bg-white">
      {/* Container */}
      <div className="container mx-auto flex justify-between items-center px-40 py-2">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-purple-900">Hekto</div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-purple-900">
          <div className="relative">
            {/* Home with Dropdown Icon */}
            <span
              onClick={toggleDropdown}
              className="cursor-pointer flex items-center text-pink-500"
            >
              {/* <a href="http://localhost:5173/">Home</a>{" "} */}
              <Link to="/">Home</Link>
              <FaChevronDown className="ml-1 text-sm" />
            </span>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg">
                <ul className="text-sm text-gray-700">
                  <li className="px-8 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link to="/OrderComplete">Oder complete</Link>
                  </li>
                  <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">
                    Item 2
                  </li>
                  <li className="px-5 py-2 hover:bg-gray-100 cursor-pointer">
                    Item 3
                  </li>
                </ul>
              </div>
            )}
          </div>
          <span>
            <Link to="/Page">Page</Link>
          </span>
          <span>
            <Link to="/Shop1">Product</Link>
          </span>
          <span>
            <Link to="">Blog</Link>
          </span>
          <span>
            <Link to="/Shop2">Shop</Link>
          </span>
          <span>
            <Link to="/Login">Contact</Link>
          </span>
        </div>

        {/* Search Box */}
        <div className="flex border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 outline-none"
          />
          <button className="bg-pink-500 text-white px-4 py-1">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
