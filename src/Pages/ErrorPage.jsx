import React from "react";
import Props1 from "../Components/Props1";
import Page404 from "../Components/Page/Page404";

const ErrorPage = () => {
  return (
    <>
      <section>
        <Props1
          heading="404 page"
          li1="Home "
          li2=". Contact"
          li3=". Login page"
        />
        <Page404 />
      </section>
    </>
  );
};

export default ErrorPage;
