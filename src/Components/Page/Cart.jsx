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

const Cart = () => {
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

  return (
    <>
      <div className="container mx-auto px-20  mt-10">
        {data.length > 0 ? (
          <div className="flex justify-between px-20 mt-10">
            <div>
              <div>
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Product
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Price
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Quantity
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
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
                        <td className="border border-gray-300 px-4 py-2">
                          <div className="flex justify-between bg-gray-400 pl-2 pr-2  ">
                            <span
                              onClick={() => handleDicrement(index)}
                              className="cursor-pointer"
                            >
                              -
                            </span>
                            <span>{item.qty}</span>
                            <span
                              onClick={() => handleIncrement(index)}
                              className="cursor-pointer"
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {item.price * item.qty}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between items-center">
                <button className=" p-3 mt-5 bg-[#fb2e86] text-gray-200 rounded-md">
                  Update Curt
                </button>
                <button
                  onClick={handleClearCart}
                  className=" p-3 mt-5 bg-[#fb2e86] text-gray-200 rounded-md"
                >
                  Clear Curt
                </button>
              </div>
            </div>

            <div>
              <div>
                <div className=" h-72 w-96 mt-6">
                  <h2 className=" text-center p-4">Calculate Shopping</h2>
                  <div className="  bg-[#F4F4FC] p-4 rounded-lg shadow-lg">
                    <div className="text-gray-400 mb-4">
                      <span>Bangladesh</span>
                    </div>
                    <hr className="border-t border-gray-300 mb-4" />
                    <div className="text-gray-400 mb-4">
                      <span>Dhaka Mirpure 1200</span>
                    </div>
                    <hr className="border-t border-gray-300 mb-4" />
                    <div className="text-gray-400 mb-4">
                      <span>Postal code</span>
                    </div>
                    <hr className="border-t border-gray-300 mb-4" />

                    {/* Button */}
                    <button className="w-full py-2 bg-[#fb2e86] text-gray-200 rounded-md ">
                      Calculate Shiping
                    </button>
                  </div>
                </div>
              </div>
              <div>
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
          </div>
        ) : (
          <div>
            <div className="flex justify-center gap-5 items-center text-center">
              <h1 className="text-4xl text-center text-red-400">
                NO product Add to cart
              </h1>
              <Link
                to="/Shop2"
                className="flex  p-3  justify-center items-center gap-4"
              >
                <h2 className="text-xl text-red-600">please go to shop</h2>{" "}
                <FaArrowRight className="cursor-pointer" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
