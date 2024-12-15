import React from "react";

const Pagination = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-20">
          <div className="flex items-center justify-center ">
            {/* Pagination */}
            <div className="flex items-center space-x-2">
              {/* Previous Button */}
              <button className="px-4 py-2 text-purple-400 border border-purple-300 rounded hover:bg-purple-100">
                Previous
              </button>

              {/* Page Numbers */}
              <button className="w-10 h-10 flex items-center justify-center text-white bg-pink-500 font-bold rounded">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-purple-400 border border-purple-300 rounded">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-purple-400 border border-purple-300 rounded">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center text-purple-400 border border-purple-300 rounded">
                4
              </button>

              {/* Next Button */}
              <button className="px-4 py-2 text-purple-400 border border-purple-300 rounded hover:bg-purple-100">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pagination;
