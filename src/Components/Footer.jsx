import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="text-[#151875] font-[Josefin Sans] py-10">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Hekto Section */}
            <div>
              <h2 className="text-[38px] font-bold mb-6">Hekto</h2>
              <div className="flex mb-6">
                {/* Input and Button Side by Side */}
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-[70%] h-[44px] pl-4 text-[16px] text-[#8A8FB9] font-[Lato] rounded-l-md outline-none"
                />
                <button className="w-[30%] h-[44px] bg-pink-500 text-white text-[14px] rounded-r-md hover:bg-pink-600 transition-all flex items-center justify-center">
                  Sign Up
                </button>
              </div>
              {/* Contact Info */}
              <p className="text-[16px] text-[#8A8FB9] font-[Lato] leading-6">
                Contact Info <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Categories Section */}
            <div>
              <h3 className="text-[22px] font-bold mb-4 font-[Josefin Sans]">
                Categories
              </h3>
              <ul className="space-y-2 text-[16px] text-[#8A8FB9] font-[Lato]">
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Laptops & Computers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Cameras & Photography
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Smart Phones & Tablets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Video Games & Consoles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Waterproof Headphones
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Care Section */}
            <div>
              <h3 className="text-[22px] font-bold mb-4 font-[Josefin Sans]">
                Customer Care
              </h3>
              <ul className="space-y-2 text-[16px] text-[#8A8FB9] font-[Lato]">
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Discount
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Orders History
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Order Tracking
                  </a>
                </li>
              </ul>
            </div>

            {/* Pages Section */}
            <div>
              <h3 className="text-[22px] font-bold mb-4 font-[Josefin Sans]">
                Pages
              </h3>
              <ul className="space-y-2 text-[16px] text-[#8A8FB9] font-[Lato]">
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Browse the Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Category
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Pre-Built Pages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    Visual Composer Elements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-all">
                    WooCommerce Pages
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="border-t border-gray-300 py-5 text-[16px] flex flex-col md:flex-row justify-between items-center mt-10 text-[#8A8FB9] font-[Lato]">
            <p>©Webecy - All Rights Reserved</p>
            <div className="flex space-x-4 text-lg mt-3 md:mt-0">
              <FaFacebookF className="cursor-pointer hover:text-blue-600 transition-all" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition-all" />
              <FaTwitter className="cursor-pointer hover:text-blue-400 transition-all" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
