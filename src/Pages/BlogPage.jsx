import React from "react";
import Props1 from "../Components/Props1";
import Blog from "../Components/Page/Blog";

const BlogPage = () => {
  return (
    <>
      <section>
        <Props1
          heading="Blog Page"
          li1="Home "
          li2=". Contact"
          li3=". Login page"
        />
        <Blog />
      </section>
    </>
  );
};

export default BlogPage;
