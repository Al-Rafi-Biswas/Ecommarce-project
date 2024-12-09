import React from "react";
import Props1 from "../Components/Props1";
import Props2 from "../Components/Props2";
import Shop1 from "../Components/Page/Shop1";

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
        <Shop1 />
      </div>
    </>
  );
};

export default ShopList;
