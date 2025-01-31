import React from "react";
import Props1 from "../Components/Props1";
import CheckOut from "../Components/Page/CheckOut";

const CheakOutPage = () => {
  return (
    <section>
      <Props1
        heading="Shopping Curt"
        li1="Home"
        li2="Contact"
        li3="Login Page"
      />
      <CheckOut />
    </section>
  );
};

export default CheakOutPage;