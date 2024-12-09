import React from "react";
import Head from "./Head";
import Navbar from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Props3 from "./Props3";

const Root = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Outlet />
      <Props3 />
      <Footer />
    </>
  );
};

export default Root;
