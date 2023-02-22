import React, { Fragment } from "react";
import { BlogPageCategories } from "../Blog-Page-Components/BlogPageCategories";
import { SingleBlogPost } from "./SingleBlogPost";
import patner_brands from "../../Assets/Home-Page-imgs/patner-brands.png";
import "./SingleBlogPage.css";

export const SingleBlogPage = () => {
  return (
    <Fragment>
      <section className="container each-subpage-header-box">
        <h2 className="each-page-title">Single Blog</h2>
        <div className="sc-page-nav">
          <a href="/#">Home</a>
          <a href="/#">. Pages</a>
          <a className="active" href="/#">
            . Single Blog
          </a>
        </div>
      </section>
      <section className="single-blog-posts-cat">
        <div className="singleblog-post-container">
          <SingleBlogPost />
        </div>
        <div className="singleblog-page-categories">
          <BlogPageCategories />
        </div>
      </section>
      <section className="container flex-center patner-brands">
        <img src={patner_brands} alt="Logos" />
      </section>
    </Fragment>
  );
};
