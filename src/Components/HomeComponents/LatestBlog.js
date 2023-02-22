import React, { Fragment } from "react";
import "./LatestBlog.css";
import { FaPenNib } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

export const LatestBlog = () => {
  return (
    <Fragment>
      <section className="container latest-blog flex-center">
        <h2 className="secondary-title">Latest Blog</h2>
        <div className="latest-blog-box">
          <div className="lb-card-img-text">
            <div className="lb-card-img one"></div>
            <div className="lb-card">
              <div className="lb-img-text">
                <p className="flex-center lb-icon">
                  <p style={{ color: "#FB2E86" }}>
                    <FaPenNib />
                  </p>
                  SaberAli
                </p>
                <p className="flex-center lb-icon">
                  <p style={{ color: "#FFA454" }}>
                    <MdOutlineDateRange />
                  </p>
                  21 August,2020
                </p>
              </div>
              <h3>Top esssential Trends in 2021</h3>
              <p className="lb-card-info">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <a href="/#">Read More</a>
            </div>
          </div>

          <div className="lb-card-img-text">
            <div className="lb-card-img two"></div>
            <div className="lb-card">
              <div className="lb-img-text">
                <p className="flex-center lb-icon">
                  <p style={{ color: "#FB2E86" }}>
                    <FaPenNib />
                  </p>
                  SaberAli
                </p>
                <p className="flex-center lb-icon">
                  <p style={{ color: "#FFA454" }}>
                    <MdOutlineDateRange />
                  </p>
                  21 August,2020
                </p>
              </div>
              <h3 className="active">Top esssential Trends in 2021</h3>
              <p className="lb-card-info">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <a className="active" href="/#">
                Read More
              </a>
            </div>
          </div>

          <div className="lb-card-img-text">
            <div className="lb-card-img three"></div>
            <div className="lb-card">
              <div className="lb-img-text">
                <p className="flex-center lb-icon">
                  <p style={{ color: "#FB2E86" }}>
                    <FaPenNib />
                  </p>
                  SaberAli
                </p>
                <p className="flex-center lb-icon">
                  <p style={{ color: "#FFA454" }}>
                    <MdOutlineDateRange />
                  </p>
                  21 August,2020
                </p>
              </div>
              <h3>Top esssential Trends in 2021</h3>
              <p className="lb-card-info">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <a href="/#">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
