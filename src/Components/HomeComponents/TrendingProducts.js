import React, { Fragment } from "react";
import "./TrendingProducts.css";
import TP1 from "../../Assets/Home-Page-imgs/TP1.png";
import TP2 from "../../Assets/Home-Page-imgs/TP2.png";
import TP3 from "../../Assets/Home-Page-imgs/TP3.png";
import TP4 from "../../Assets/Home-Page-imgs/TP4.png";
import TP_off1 from "../../Assets/Home-Page-imgs/TP_off1.png";
import TP_off2 from "../../Assets/Home-Page-imgs/TP_off2.png";
import ES1 from "../../Assets/Home-Page-imgs/ES1.png";
import ES2 from "../../Assets/Home-Page-imgs/ES2.png";
import ES3 from "../../Assets/Home-Page-imgs/ES3.png";

export const TrendingProducts = () => {
  return (
    <Fragment>
      <section className="container trending-products flex-center">
        <h2 className="secondary-title">Trending Products</h2>
        <div className="trnd-prod-box">
          <div className="tp-card flex-center">
            <div className="tp-card-img flex-center">
              <img src={TP1} alt="Trending products" />
            </div>
            <div className="tp-card-details">
              <p>Cantilever chair</p>
              <div className="tp-card-price">
                <span>$26.00 &nbsp;</span>
                <span>$42.00</span>
              </div>
            </div>
          </div>

          <div className="tp-card flex-center">
            <div className="tp-card-img flex-center">
              <img src={TP2} alt="Trending products" />
            </div>
            <div className="tp-card-details">
              <p>Cantilever chair</p>
              <div className="tp-card-price">
                <span>$26.00 &nbsp;</span>
                <span>$42.00</span>
              </div>
            </div>
          </div>

          <div className="tp-card flex-center">
            <div className="tp-card-img flex-center">
              <img src={TP3} alt="Trending products" />
            </div>
            <div className="tp-card-details">
              <p>Cantilever chair</p>
              <div className="tp-card-price">
                <span>$26.00 &nbsp;</span>
                <span>$42.00</span>
              </div>
            </div>
          </div>

          <div className="tp-card flex-center">
            <div className="tp-card-img flex-center">
              <img src={TP4} alt="Trending products" />
            </div>
            <div className="tp-card-details">
              <p>Cantilever chair</p>
              <div className="tp-card-price">
                <span>$26.00 &nbsp;</span>
                <span>$42.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-off-prod">
          <div className="off-prod-card one">
            <div>
              <p>23% off in all products</p>
              <a href="/#">Shop Now</a>
            </div>
            <img src={TP_off1} alt="product" />
          </div>

          <div className="off-prod-card two">
            <div>
              <p>23% off in all products</p>
              <a href="/#">View Collection</a>
            </div>
            <img src={TP_off2} alt="product" />
          </div>

          <div className="esc-container">
            <div className="exe-seat-chair-box">
              <div className="esc-img flex-center">
                <img src={ES1} alt="Executive seat chair" />
              </div>
              <div className="esc-text">
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </div>
            </div>
            <div className="exe-seat-chair-box">
              <div className="esc-img flex-center">
                <img src={ES2} alt="Executive seat chair" />
              </div>
              <div className="esc-text">
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </div>
            </div>
            <div className="exe-seat-chair-box">
              <div className="esc-img flex-center">
                <img src={ES3} alt="Executive seat chair" />
              </div>
              <div className="esc-text">
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
