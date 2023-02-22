import React, { Fragment } from "react";
import "./PromotionPage.css";
import chair from "../../Assets/Home-Page-imgs/chair.png";
import light from "../../Assets/Home-Page-imgs/light.png";
import offer from "../../Assets/Home-Page-imgs/offer.png";

export const PromotionPage = () => {
  return (
    <Fragment>
      <section className="promotion-section">
        <section className="promotion-container">
          <img src={light} alt="Background-lamp" className="lamp-background" />
          <div className="promotion-text">
            <p className="promotion-text-1">
              Best Furniture For Your Castle....
            </p>
            <h2 className="promotion-text-2">
              New Furniture Collection Trends in 2020
            </h2>
            <p className="promotion-text-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="btn-to-shop">Shop Now</button>
          </div>
          <div className="promotion-chair">
            <img className="promotion-chair-img" src={chair} alt="chair" />
            <div className="promotion-offer">
              <img src={offer} alt="background" />
              <p className="offer-text">50% off</p>
            </div>
          </div>
        </section>
        <div className="promotion-page-nav-box">
          <div className="promotion-page-nav active"></div>
          <div className="promotion-page-nav"></div>
          <div className="promotion-page-nav"></div>
        </div>
      </section>
    </Fragment>
  );
};
