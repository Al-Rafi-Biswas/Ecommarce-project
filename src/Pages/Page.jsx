import React from "react";
import Props1 from "../Components/Props1";
import Props2 from "../Components/Props2";

const Page = () => {
  return (
    <>
      <section>
        <div className="container mx-auto ">
          <Props1
            heading="Shop Grid Default"
            li1="Home "
            li2=". Pages"
            li3=". Shop Grid Default"
          />
          <Props2 />
        </div>
      </section>
    </>
  );
};

export default Page;
