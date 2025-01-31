import React from "react";
import Props1 from "../Components/Props1";
import SignUp from "../Components/Page/SignUp";

const Registation = () => {
  return (
    <>
      <section>
        <Props1
          heading="Login page"
          li1="Home "
          li2=". Contact"
          li3=". Login page"
        />
        <SignUp />
      </section>
    </>
  );
};

export default Registation;
