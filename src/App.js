import "./App.css";
import { Fragment } from "react";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./Pages/ShoppingCart";
import { MyAccountLogin } from "./Pages/MyAccountLogin";
import { AboutUs } from "./Pages/AboutUs";
import { BlogPage } from "./Pages/BlogPage";
import { SingleBlog } from "./Pages/SingleBlog";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/my-account" element={<MyAccountLogin />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog-page" element={<BlogPage />} />
        <Route path="/single-blog-page" element={<SingleBlog />} />
      </Routes>
    </Fragment>
  );
}

export default App;
