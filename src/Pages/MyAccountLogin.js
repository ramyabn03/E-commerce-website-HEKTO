import React, { Fragment } from "react";
import { Login } from "../Components/MyAccountComponents/Login";
import { Footer } from "../Layouts/Footer";
import { Navigation } from "../Layouts/Navigation";

export const MyAccountLogin = () => {
  return (
    <Fragment>
      <Navigation />
      <Login />
      <Footer />
    </Fragment>
  );
};
