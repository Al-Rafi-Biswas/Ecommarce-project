import React from "react";
import Props1 from "../Components/Props1";
import Contact from "../Components/Contact/Login";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-20">
          <Props1
            heading="Login page"
            li1="Home "
            li2=". Contact"
            li3=". Login page"
          />
          <Contact />
        </div>
      </section>
    </>
  );
};

export default Contact;
