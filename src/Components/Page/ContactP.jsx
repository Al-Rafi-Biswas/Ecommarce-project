import React from "react";
import group from "../../assets/contact.png";

const ContactP = () => {
  return (
    <div className="container mx-auto px-20">
      <div className="mt-10">
        <div className="text-center  p-6 grid grid-cols-2 gap-8 bg-white shadow-md rounded-lg">
          <div>
            <h2 className="text-2xl font-bold mb-4">Information About us</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <div className="flex space-x-2">
              <span className="w-4 h-4 bg-purple-600 rounded-full"></span>
              <span className="w-4 h-4 bg-pink-500 rounded-full"></span>
              <span className="w-4 h-4 bg-cyan-400 rounded-full"></span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Way</h2>
            <div className="flex items-center mb-4">
              <span className="w-4 h-4 bg-purple-600 rounded-full mr-2"></span>
              <div>
                <p className="text-gray-700">Tel: 877-67-88-99</p>
                <p className="text-gray-700">E-Mail: shop@store.com</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <span className="w-4 h-4 bg-orange-400 rounded-full mr-2"></span>
              <p className="text-gray-700">
                20 Margaret st, London, Great Britain, 3NM98-LK
              </p>
            </div>
            <div className="flex items-center mb-4">
              <span className="w-4 h-4 bg-pink-500 rounded-full mr-2"></span>
              <p className="text-gray-700">Support Forum For over 24hr</p>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              <p className="text-gray-700">
                Free standard shipping on all orders.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 gap-3 mb-20">
        <div>
          <div className="max-w-lg  p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />
            <textarea
              placeholder="Type Your Message*"
              className="w-full border border-gray-300 p-2 rounded-md mb-4 h-32"
            ></textarea>
            <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">
              Send Mail
            </button>
          </div>
        </div>
        <div>
          <img src={group} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactP;
