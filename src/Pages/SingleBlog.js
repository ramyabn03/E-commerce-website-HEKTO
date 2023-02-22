import React, { Fragment } from "react";
import { SingleBlogPage } from "../Components/SingleBlog-Components/SingleBlogPage";
import { Footer } from "../Layouts/Footer";
import { Navigation } from "../Layouts/Navigation";

export const SingleBlog = () => {
  return (
    <Fragment>
      <Navigation />
      <SingleBlogPage />
      <Footer />
    </Fragment>
  );
};
