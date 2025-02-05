import React from "react";
import Props1 from "../Components/Props1";
import Props2 from "../Components/Props2";
import Product from "../Components/Page/Product";

const Page = () => {
  return (
    <>
      <div className="container mx-auto ">
        <Props1
          heading="Shop Grid Default"
          li1="Home "
          li2=". Pages"
          li3=". Shop Grid Default"
        />
        <Props2 />
        <Product />
      </div>
    </>
  );
};

export default Page;
