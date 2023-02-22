import React, { Fragment } from "react";
import { AboutUsPage } from "../Components/AboutUsComponents/AboutUsPage";
import { Footer } from "../Layouts/Footer";
import { Navigation } from "../Layouts/Navigation";

export const AboutUs = () => {
  return (
    <Fragment>
      <Navigation />
      <AboutUsPage />
      <Footer />
    </Fragment>
  );
};
