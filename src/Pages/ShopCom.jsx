import React from "react";
import Props1 from "../Components/Props1";
import OrderCompleted from "../Components/Item/OrderCompleted";

const ShopCom = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-20">
          <Props1
            heading="Order complete"
            li1="Home "
            li2=". Shop"
            li3=". Shopcomplete"
          />
          <OrderCompleted />
        </div>
      </section>
    </>
  );
};

export default ShopCom;
