import React from "react";
import Props1 from "../Components/Props1";
import ContactP from "../Components/Page/ContactP";

const ContactPage = () => {
  return (
    <>
      <section>
        <Props1
          heading="Contact page"
          li1="Home "
          li2=". Contact"
          li3=". Login page"
        />
        <ContactP />
      </section>
    </>
  );
};

export default ContactPage;
