import React from "react";
import { Fragment } from "react";
import { FeatureProducts } from "../Components/HomeComponents/FeatureProducts";
import { LatestProducts } from "../Components/HomeComponents/LatestProducts";
import { PromotionPage } from "../Components/HomeComponents/PromotionPage";
import { Navigation } from "../Layouts/Navigation";
import { TrendingProducts } from "../Components/HomeComponents/TrendingProducts";
import { DiscountIteam } from "../Components/HomeComponents/DiscountIteam";
import { LatestBlog } from "../Components/HomeComponents/LatestBlog";
import { Footer } from "../Layouts/Footer";

export const Home = () => {
  return (
    <Fragment>
      <Navigation />
      <PromotionPage />
      <FeatureProducts />
      <LatestProducts />
      <TrendingProducts />
      <DiscountIteam />
      <LatestBlog />
      <Footer />
    </Fragment>
  );
};
