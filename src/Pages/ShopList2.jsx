import React from "react";
import Props1 from "../Components/Props1";
import Props2 from "../Components/Props2";
import Shop2 from "../Components/Page/Shop2";
import Pagination from "../Components/Page/Pagination";

const ShopList = () => {
  return (
    <>
      <div className="container mx-auto ">
        <Props1
          heading="Shop Grid Default"
          li1="Home "
          li2=". Pages"
          li3=". Shoplist"
        />
        <Props2 />
        <Shop2 />
        <Pagination />
      </div>
    </>
  );
};

export default ShopList;
