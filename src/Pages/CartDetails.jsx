import React from "react";
import Props1 from "../Components/Props1";
import Cart from "../Components/Page/Cart";

const CartDetails = () => {
  return (
    <section>
      <Props1
        heading="Shopping Curt"
        li1="Home"
        li2="Contact"
        li3="Login Page"
      />
      <Cart />
    </section>
  );
};

export default CartDetails;
