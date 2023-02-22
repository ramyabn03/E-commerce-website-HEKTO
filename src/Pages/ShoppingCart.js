import React, { Fragment } from "react";
import { ShoppingCartDetails } from "../Components/ShoppingCartComponents/ShoppingCartDetails";
import { CartProducts } from "../Components/ShoppingCartComponents/CartProducts";
import { Navigation } from "../Layouts/Navigation";
import { Footer } from "../Layouts/Footer";

export const ShoppingCart = () => {
  return (
    <Fragment>
      <Navigation />
      <ShoppingCartDetails />
      <CartProducts />
      <Footer />
    </Fragment>
  );
};
