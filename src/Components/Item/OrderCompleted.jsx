import React from "react";
import { FaCheck, FaRegClock, FaShoppingCart } from "react-icons/fa";

const OrderCompleted = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5 sm:p-10">
      {/* Main Container */}
      <div className="bg-[#F6F9FF] p-12 rounded-lg shadow-lg w-full lg:h-[400px] text-center relative">
        {/* Checkmark Icon (Above the heading) */}
        <div className="mb-4 absolute top-0 left-1/2 transform -translate-x-1/2 p-4">
          <FaCheck className="text-4xl text-[#4CAF50]" />
        </div>
        {/* Order Completion Text */}
        <h2 className="text-3xl font-semibold text-[#2F3C7E] mb-4 mt-16">
          Your Order Is Completed!
        </h2>
        <p className="text-lg text-[#6B6F8A] mb-6">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        {/* Continue Shopping Button */}
        <button className="bg-[#FF46D8] text-white font-semibold py-2 px-6 rounded-full mb-4 hover:bg-[#FB2E86] focus:outline-none">
          Continue Shopping
        </button>
        {/* Clock Icon (Now on the top-left corner) */}
        <div className="absolute top-5 left-5">
          <FaRegClock className="text-4xl text-[#4D65B8]" />
        </div>
        {/* Shopping Cart Icon (Positioned at the bottom-right corner with hover effect) */}
        <div className="absolute bottom-5 right-5 w-16 h-16 flex items-center justify-center bg-[#F0F0F0] rounded-full transition-transform duration-300  hover:scale-110">
          <FaShoppingCart className="text-3xl hover:text-[#FF46D8]" />
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
