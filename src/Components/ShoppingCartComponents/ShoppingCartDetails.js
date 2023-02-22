import React, { Fragment } from "react";
import "./ShoppingCartDetails.css";

export const ShoppingCartDetails = () => {
  return (
    <Fragment>
      <section className="container each-subpage-header-box">
        <h2 className="each-page-title">Shopping Cart</h2>
        <div className="sc-page-nav">
          <a href="/#">Home</a>
          <a href="/#">. Pages</a>
          <a className="active" href="/#">
            . Shopping Cart
          </a>
        </div>
      </section>
    </Fragment>
  );
};
