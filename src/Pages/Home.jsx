import React from "react";
import Hero1 from "../Components/Hero1";
import Hero2 from "../Components/Hero2";
import Hero3 from "../Components/Hero3";
import Hero4 from "../Components/Hero4";
import Hero5 from "../Components/Hero5";
import Hero6 from "../Components/Hero6";
import Hero7 from "../Components/Hero7";
import Hero8 from "../Components/Hero8";
import Hero9 from "../Components/Hero9";
import Hero6_2 from "../Components/Hero6_2";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  return (
    <>
      {token ? (
        <>
          <Hero1 />
          <Hero2 />
          <Hero3 />
          <Hero4 />
          <Hero5 />
          <Hero6 />
          <Hero6_2 />
          <Hero7 />
          <Hero8 />
          <Hero9 />
        </>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-xl text-red-500 mb-10">
            You are Logout please Login .
          </h2>
          <Link
            to="/Login"
            className="text-white rounded-md  border border-red-300 p-3 bg-red-400"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
