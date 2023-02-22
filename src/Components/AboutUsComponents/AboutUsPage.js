import React, { Fragment } from "react";
import "./AboutUsPage.css";
import history from "../../Assets/AboutUs-Page-imgs/history.png";
import SO4 from "../../Assets/Home-Page-imgs/support2.png";
import SO2 from "../../Assets/Home-Page-imgs/cashback.png";
import SO1 from "../../Assets/Home-Page-imgs/free-delivery.png";
import SO3 from "../../Assets/Home-Page-imgs/premium-quality.png";
import C1 from "../../Assets/AboutUs-Page-imgs/C1.png";
import C2 from "../../Assets/AboutUs-Page-imgs/C2.png";
import C3 from "../../Assets/AboutUs-Page-imgs/C3.png";

export const AboutUsPage = () => {
  return (
    <Fragment>
      <section className="container each-subpage-header-box">
        <h2 className="each-page-title">About Us</h2>
        <div className="sc-page-nav">
          <a href="/#">Home</a>
          <a href="/#">. Pages</a>
          <a className="active" href="/#">
            . About Us
          </a>
        </div>
      </section>
      <section className="container aboutus-history">
        <div className="auh-img">
          <img src={history} alt="Business" />
        </div>
        <div className="auh-details">
          <h3>Know About Our Ecomerce Business, History</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <button className="btn-to-shop">Contact us</button>
        </div>
      </section>
      <section className="container products-container au-of-box">
        <h2 className="secondary-title">Our Features</h2>
        <div className="so-points flex-center">
          <div className=" so-point-box flex-center">
            <img src={SO1} alt="Shopex offers" />
            <p>Free Delivery</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className=" so-point-box flex-center aboutus-feature-active">
            <img src={SO2} alt="Shopex offers" />
            <p>100% Cash Back</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className=" so-point-box flex-center">
            <img src={SO3} alt="Shopex offers" />
            <p>Quality Product</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className=" so-point-box flex-center">
            <img src={SO4} alt="Shopex offers" />
            <p>24/7 Support</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </section>
      <section className="container clients-opinion flex-center">
        <h3>Our Client Say!</h3>
        <div className="clients-imgs">
          <img src={C1} alt="Client" />
          <img className="c2" src={C2} alt="Client" />
          <img src={C3} alt="Client" />
        </div>
        <div className="clients-info">
          <p>Selina Gomez</p>
          <p>Ceo At Webecy Digital</p>
        </div>
        <p className="clients-msg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
          lacus volutpat praesent.
        </p>
        <div className="featr-prod-nav">
          <div className="fp-page-nav"></div>
          <div className="fp-page-nav active"></div>
          <div className="fp-page-nav"></div>
        </div>
      </section>
    </Fragment>
  );
};
