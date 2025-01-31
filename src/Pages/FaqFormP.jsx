import React from "react";
import Props1 from "../Components/Props1";
import FaqForm from "../Components/Page/FaqForm";

const FaqFormP = () => {
  return (
    <>
      <section>
        <Props1
          heading="404 page"
          li1="Home "
          li2=". Contact"
          li3=". Login page"
        />
        <FaqForm />
      </section>
    </>
  );
};

export default FaqFormP;
