import React, { Fragment } from "react";
import { BlogPagePosts } from "../Components/Blog-Page-Components/BlogPagePosts";
import { Footer } from "../Layouts/Footer";
import { Navigation } from "../Layouts/Navigation";

export const BlogPage = () => {
  return (
    <Fragment>
      <Navigation />
      <BlogPagePosts />
      <Footer />
    </Fragment>
  );
};
