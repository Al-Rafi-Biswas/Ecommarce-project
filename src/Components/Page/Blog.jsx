import React from "react";
import img1 from "../../assets/Blog/bruce-mars-FWVMhUa_wbY-unsplash 2.png";
import img2 from "../../assets/Blog/bruce-mars-FWVMhUa_wbY-unsplash 3.png";
import img3 from "../../assets/Blog/bruce-mars-FWVMhUa_wbY-unsplash 4.png";
import img4 from "../../assets/Blog/Rectangle 126 (1).png";
import img5 from "../../assets/Blog/Rectangle 126 (2).png";
import img6 from "../../assets/Blog/Rectangle 126 (3).png";
import img7 from "../../assets/Blog/Rectangle 126.png";
import img8 from "../../assets/Blog/Mask Group.png";
import img9 from "../../assets/Blog/Mask Group (1).png";
import img10 from "../../assets/Blog/Mask Group (2).png";
import img11 from "../../assets/Blog/Mask Group (3).png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

// import saleProduct from "../../assets/Products/sale-product.png";
// import offerProduct from "../../assets/Products/offer-product.png";

const Blog = () => {
  const posts = [
    {
      id: 1,
      image: img1,
      category: "Surf Auction",
      date: "Aug 09 2020",
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
    },
    {
      id: 2,
      image: img2,
      category: "Surf Auction",
      date: "Aug 09 2020",
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
    },
    {
      id: 3,
      image: img3,
      category: "Surf Auction",
      date: "Aug 09 2020",
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      {/* Main Blog Section */}
      <div className="md:col-span-2 space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* ✅ Blog Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 9h10m-9 4h10m-9 4h6"
                    />
                  </svg>
                  <span>{post.date}</span>
                </span>
              </div>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">{post.description}</p>
              <a
                href="#"
                className="text-indigo-600 font-semibold mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Section */}
      <div className="hidden md:block w-full space-y-6">
        {/* ✅ Search Box */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold text-indigo-900 mb-4">Search</h3>
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* ✅ Categories Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold text-indigo-900 mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Website (10)</li>
            <li>Design (7)</li>
            <li>Review (5)</li>
          </ul>
        </div>

        {/* ✅ Sale Product Section */}
        <div>
          <div class="p-4 max-w-md mx-auto">
            <h2 class="text-xl font-bold text-blue-700 mb-4">Recent Post</h2>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <img
                  src={img7}
                  alt="Post image"
                  class="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    It is a long established fact
                  </h3>
                  <p class="text-sm text-gray-500">Aug 09 2020</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <img
                  src={img6}
                  alt="Post image"
                  class="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    It is a long established fact
                  </h3>
                  <p class="text-sm text-gray-500">Aug 09 2020</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <img
                  src={img5}
                  alt="Post image"
                  class="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    It is a long established fact
                  </h3>
                  <p class="text-sm text-gray-500">Aug 09 2020</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <img
                  src={img4}
                  alt="Post image"
                  class="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    It is a long established fact
                  </h3>
                  <p class="text-sm text-gray-500">Aug 09 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Offer Product Section */}
        <div>
          <div class="p-4 max-w-md mx-auto">
            <h2 class="text-xl font-bold text-blue-700 mb-4">Sale Product</h2>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <img
                  src={img4}
                  alt="Post image"
                  class="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    It is a long established fact
                  </h3>
                  <p class="text-sm text-gray-500">Aug 09 2020</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <img
                  src={img5}
                  alt="Post image"
                  class="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    It is a long established fact
                  </h3>
                  <p class="text-sm text-gray-500">Aug 09 2020</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <img
                  src={img6}
                  alt="Post image"
                  class="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    It is a long established fact
                  </h3>
                  <p class="text-sm text-gray-500">Aug 09 2020</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <img
                  src={img7}
                  alt="Post image"
                  class="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">
                    It is a long established fact
                  </h3>
                  <p class="text-sm text-gray-500">Aug 09 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="p-4 max-w-md mx-auto">
            <h2 class="text-xl font-bold text-blue-700 mb-6">Offer product</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center">
                <img
                  src={img8}
                  alt="Product image"
                  class="w-full h-28 object-cover rounded-md"
                />
                <h3 class="text-base font-medium text-gray-800 mt-2">
                  Duis lectus est.
                </h3>
                <p class="text-sm text-gray-500">$12.00 - $15.00</p>
              </div>

              <div class="text-center">
                <img
                  src={img9}
                  alt="Product image"
                  class="w-full h-28 object-cover rounded-md"
                />
                <h3 class="text-base font-medium text-gray-800 mt-2">
                  Sed placerat.
                </h3>
                <p class="text-sm text-gray-500">$12.00 - $15.00</p>
              </div>

              <div class="text-center">
                <img
                  src={img10}
                  alt="Product image"
                  class="w-full h-28 object-cover rounded-md"
                />
                <h3 class="text-base font-medium text-gray-800 mt-2">
                  Netus proin.
                </h3>
                <p class="text-sm text-gray-500">$12.00 - $15.00</p>
              </div>

              <div class="text-center">
                <img
                  src={img11}
                  alt="Product image"
                  class="w-full h-28 object-cover rounded-md"
                />
                <h3 class="text-base font-medium text-gray-800 mt-2">
                  Platea in.
                </h3>
                <p class="text-sm text-gray-500">$12.00 - $15.00</p>
              </div>
            </div>

            <h2 class="text-xl font-bold text-blue-700 mt-8 mb-4">Follow</h2>
            <div class="flex space-x-4 justify-center">
              <a
                href="https://www.facebook.com/md.al.rafi.87398"
                class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800"
              >
                <i class="fab fa-facebook-f"><FaFacebookSquare /></i>
              </a>
              <a
                href="#"
                class="w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600"
              >
                <i class="fab fa-instagram"><FaInstagram /></i>
              </a>
              <a
                href="#"
                class="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
              >
                <i class="fab fa-twitter"><FaXTwitter /></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
