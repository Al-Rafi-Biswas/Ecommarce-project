import React, { useContext, useState } from "react";
import { apiData } from "../ContaxtApi";
import Shop2 from "./Shop2";

const Pagination = () => {
  const data = useContext(apiData);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(30);

  const lastItemIndex = currentPage * perPage;
  const firstItemIndex = lastItemIndex - perPage;

  const totalPage = Math.ceil(data.length / perPage);

  const currentPageProducts = data.slice(firstItemIndex, lastItemIndex);

  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  const handleNextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGoToPage = (item) => {
    setCurrentPage(item);
  };

  return (
    <>
      <Shop2 currentPageProducts={currentPageProducts} />
      <section>
        <div className="container mx-auto px-20">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={handlePreviousPage}
                className="px-4 py-2 text-purple-400 border border-purple-300 rounded hover:bg-purple-100"
              >
                Previous
              </button>

              {pages.map((item) => (
                <button
                  onClick={() => handleGoToPage(item)}
                  className={` w-10 h-10 flex items-center justify-center text-purple-400 border border-purple-300 rounded ${
                    item === currentPage ? "bg-purple-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}

              <button
                onClick={handleNextPage}
                className="px-4 py-2 text-purple-400 border border-purple-300 rounded hover:bg-purple-100"
              >
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
