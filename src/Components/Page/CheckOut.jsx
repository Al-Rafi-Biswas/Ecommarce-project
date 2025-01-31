import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSkullCrossbones } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  deleteItem,
  increment,
  dicriment,
  clearCart,
} from "../Slices/CartSlice";

const CheckOut = () => {
  // logic ........

  let data = useSelector((state) => state.cartItemManager.cartItems);
  const dispatch = useDispatch();

  const handelDelete = (index) => {
    dispatch(deleteItem(index));
  };

  const handleIncrement = (index) => {
    dispatch(increment(index));
  };

  const handleDicrement = (index) => {
    dispatch(dicriment(index));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    sum += item.price * item.qty;
  }

  // logic........

  return (
    <>
      <div className="container mx-auto px-20 flex justify-center gap-20 ">
        <div>
          <div className="mt-5">
            <h1 className="text-xl">Hekto Demo</h1>
            <p className="text-[16px]">Cart/ Information/ Shipping/ Payment</p>
          </div>
          <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="updates" className="mr-2" />
              <label htmlFor="updates" className="text-sm text-gray-600">
                Keep me up to date on news and exclusive offers
              </label>
            </div>

            <h2 className="text-xl font-bold mb-4">Shipping address</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name (optional)"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Bangladesh"
                className="border border-gray-300 p-2 rounded-md w-full"
                disabled
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">
              <Link to="/Shop2">Continue Shipping</Link>
            </button>
          </div>
        </div>
        <div className="mt-12">
          {/* map er ongso */}
          <div>
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center gap-4">
                    <div>
                      <div className="relative">
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="h-20 w-28"
                        />
                        <FaSkullCrossbones
                          onClick={() => handelDelete(index)}
                          className="absolute top-0 right-0 cursor-pointer"
                        />
                      </div>
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <h4>color:</h4>
                      <h4>size:</h4>
                    </div>
                  </div>
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {item.price}
                </td>
              </tr>
            ))}
          </div>
          {/* table er ongso */}
          <div className=" mt-6">
            <h2 className=" text-center p-4">Cart Totals</h2>
            <div className="w-96 bg-white p-4 rounded-lg shadow-lg">
              {/* Subtotal Section */}
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span className="font-bold">${sum}</span>
              </div>

              {/* Horizontal Line */}
              <hr className="border-t border-gray-300 mb-4" />

              {/* Total Section */}
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-bold">${sum}</span>
              </div>

              {/* Button */}
              <button className="w-full py-2 bg-[#19D16F] text-white rounded-md hover:bg-[#fb2e86]">
                <Link to="/CheckOut">Proceed To Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
