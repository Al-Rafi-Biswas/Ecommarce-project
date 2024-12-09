import React, { useContext } from "react";
import { apiData } from "./ContaxtApi";

const Hero3 = () => {
  let data = useContext(apiData);

  // যদি data লোড না হয়
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div>
        {/* শিরোনাম */}
        <div>
          <h1 className="text-[42px] font-josefin font-semibold text-center text-[#1E3A8A]">
            Discount Item
          </h1>
          <div className="mt-12">
            <ul className="flex justify-center items-center font-Lato text-[22px] gap-5">
              <li className="hover:text-[#FB2E86] hover:underline">
                New Arrival
              </li>
              <li className="hover:text-[#FB2E86] hover:underline">
                Best Seller
              </li>
              <li className="hover:text-[#FB2E86] hover:underline">Featured</li>
              <li className="hover:text-[#FB2E86] hover:underline">
                Special Offer
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* প্রোডাক্ট তালিকা */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
        {data.map((item, index) => (
          <div
            key={item.id || index}
            className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* প্রোডাক্ট ইমেজ */}
            <img
              className="w-full h-auto"
              src={item.thumbnail}
              alt={item.title}
            />
            <div className="p-4">
              {/* প্রোডাক্ট নাম */}
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>

              {/* দাম (ডিসকাউন্টেড এবং আসল) */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-bold text-indigo-600">
                  ${item.Price}
                </span>
                <span className="text-sm line-through text-red-400">
                  ${item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero3;
