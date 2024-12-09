import React from "react";

const EcommerceHeader = () => {
  return (
    <div className="container mx-auto px-20 p-4 mt-8 flex flex-wrap justify-between items-center text-sm sm:text-base">
      {/* Title */}
      <div>
        <h1 className="text-[#1E3A8A] font-josefin font-semibold">
          Ecommerce Accesories & Fashion item
        </h1>
        <p className="text-gray-500">About 9,620 results (0.62 seconds)</p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0">
        {/* Per Page */}
        <div className="flex items-center">
          <span className="mr-2 text-[#1E3A8A]">Per Page:</span>
          <input
            type="number"
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            placeholder="10"
          />
        </div>

        {/* Sort By */}
        <div className="flex items-center">
          <span className="mr-2 text-[#1E3A8A]">Sort By:</span>
          <select
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            defaultValue="Best Match"
          >
            <option value="Best Match">Best Match</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to Low">Price High to Low</option>
            <option value="Newest">Newest</option>
          </select>
        </div>

        {/* View */}
        <div className="flex items-center">
          <span className="mr-2 text-[#1E3A8A]">View:</span>
          <button className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#1E3A8A]">
            {/* Grid Icon */}
            <div className="w-4 h-4 grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-[#1E3A8A]"></div>
              <div className="w-2 h-2 bg-[#1E3A8A]"></div>
              <div className="w-2 h-2 bg-[#1E3A8A]"></div>
              <div className="w-2 h-2 bg-[#1E3A8A]"></div>
            </div>
          </button>
          <button className="ml-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#1E3A8A]">
            {/* List Icon */}
            <div className="w-4 h-4 flex flex-col gap-1">
              <div className="w-full h-[2px] bg-[#1E3A8A]"></div>
              <div className="w-full h-[2px] bg-[#1E3A8A]"></div>
              <div className="w-full h-[2px] bg-[#1E3A8A]"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHeader;
