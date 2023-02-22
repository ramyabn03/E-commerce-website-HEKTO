import React, { Fragment, useState, useMemo } from "react";
import "./BlogPagePosts.css";
import { FaPenNib } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
// import P1 from "../../Assets/Blog-Page-imgs/P1.png";
// import P2 from "../../Assets/Blog-Page-imgs/P2.png";
// import P3 from "../../Assets/Blog-Page-imgs/P3.png";
import { BlogPageCategories } from "./BlogPageCategories";

import Pagination from "./Pagination";

import patner_brands from "../../Assets/Home-Page-imgs/patner-brands.png";

let PageSize = 3;

export const BlogPagePosts = () => {
  const postsblog = require("../../Blog-posts.json");

  const [currentPage, setCurrentPage] = useState(1);

  const currentPosts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return postsblog.blogposts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, postsblog.blogposts]);

  return (
    <Fragment>
      <section className="container each-subpage-header-box">
        <h2 className="each-page-title">Blog Page</h2>
        <div className="sc-page-nav">
          <a href="/#">Home</a>
          <a href="/#">. Pages</a>
          <a className="active" href="/#">
            . Blog Page
          </a>
        </div>
      </section>
      <section className="main-container-blogpage">
        <section className="blog-post-container">
          {currentPosts.map((each) => {
            return (
              <div className="blog-post-card">
                <img className="bp-img" src={each.image} alt="Blog Posts" />
                <div className="bp-img-text">
                  <div className="flex-center">
                    <p
                      style={{
                        color: "#FB2E86",
                      }}
                    >
                      <FaPenNib />
                    </p>
                    <p className="bp-icon one">{each.author}</p>
                  </div>
                  <div className="flex-center">
                    <p
                      style={{
                        color: "#FFA454",
                      }}
                    >
                      <MdOutlineDateRange />
                    </p>
                    <p className="bp-icon two">{each.date}</p>
                  </div>
                </div>
                <h3>{each.title}</h3>
                <p className="bp-detail">{each.info}</p>
                <a href="/#">
                  Read More
                  <span>
                    <BsDot />
                  </span>
                </a>
              </div>
            );
          })}
          {/* <div className="blog-post-card">
            <img className="bp-img" src={P2} alt="Blog Posts" />
            <div className="bp-img-text">
              <div className="flex-center">
                <p
                  style={{
                    color: "#FB2E86",
                  }}
                >
                  <FaPenNib />
                </p>
                <p className="bp-icon one">Surf Auxion</p>
              </div>
              <div className="flex-center">
                <p
                  style={{
                    color: "#FFA454",
                  }}
                >
                  <MdOutlineDateRange />
                </p>
                <p className="bp-icon two">August 09 2020</p>
              </div>
            </div>
            <h3>Mauris at orci non vulputate diam tincidunt nec.</h3>
            <p className="bp-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
            <a href="/#">
              Read More
              <span>
                <BsDot />
              </span>
            </a>
          </div>
          <div className="blog-post-card">
            <img className="bp-img" src={P3} alt="Blog Posts" />
            <div className="bp-img-text">
              <div className="flex-center">
                <p
                  style={{
                    color: "#FB2E86",
                  }}
                >
                  <FaPenNib />
                </p>
                <p className="bp-icon one">Surf Auxion</p>
              </div>
              <div className="flex-center">
                <p
                  style={{
                    color: "#FFA454",
                  }}
                >
                  <MdOutlineDateRange />
                </p>
                <p className="bp-icon two">August 09 2020</p>
              </div>
            </div>
            <h3>Mauris at orci non vulputate diam tincidunt nec.</h3>
            <p className="bp-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
            <a href="/#">
              Read More
              <span>
                <BsDot />
              </span>
            </a>
          </div> */}
          {/* <section className="container blog-page-nav">
            <div className="blog-page-num flex-center active">1</div>
            <div className="blog-page-num flex-center">2</div>
            <div className="blog-page-num flex-center">3</div>
            <div className="blog-page-num flex-center">4</div>
          </section> */}
          <Pagination
            currentPage={currentPage}
            totalCount={postsblog.blogposts.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </section>
        <div className="bp-cat-container">
          <BlogPageCategories />
        </div>
      </section>
      <section className="container flex-center patner-brands">
        <img src={patner_brands} alt="Logos" />
      </section>
    </Fragment>
  );
};
