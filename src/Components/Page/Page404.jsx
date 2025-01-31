import React from "react";
import error from "../../assets/Error123.png";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className=" mx-auto" src={error} alt="404 Error" />
      <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
        Back To Home
      </button>
    </div>
  );
};

export default Page404;
