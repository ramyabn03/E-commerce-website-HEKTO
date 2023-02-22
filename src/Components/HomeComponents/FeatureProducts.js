import React, { Fragment } from "react";
import "./FeatureProducts.css";
// import FP1 from "../../Assets/Home-Page-imgs/FP1.png";
// import FP2 from "../../Assets/Home-Page-imgs/FP2.png";
// import FP3 from "../../Assets/Home-Page-imgs/FP3.png";
// import FP4 from "../../Assets/Home-Page-imgs/FP4.png";
import { TbHeart } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { FaSearchPlus } from "react-icons/fa";
import Slider from "react-slick";
import "../Styles-sliders/slick.css";
import "../Styles-sliders/slick-theme.css";

export const FeatureProducts = () => {
  const record = require("../../FeaturedProducts.json");

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.99,
    slidesToScroll: 1,
  };

  function handleMouseEnter(e) {
    const eleadd = document.getElementById(e);
    eleadd.classList.add("active");
  }

  function handleMouseLeave(e) {
    const elerem = document.getElementById(e);
    elerem.classList.remove("active");
  }

  return (
    <Fragment>
      <section className="container feature-products">
        <h2 className="secondary-title">Featured Products</h2>

        {/* <div className="feature-prod-container"> */}
        <Slider {...settings}>
          {record.featuredproducts.map((x, index) => {
            return (
              <div className="featr-card">
                <div
                  className="featr-card-img"
                  id={x.id}
                  onMouseEnter={() => handleMouseEnter(x.id)}
                  onMouseLeave={() => handleMouseLeave(x.id)}
                >
                  <div className="active-fp-icons">
                    <a className="flex-center" href="/#">
                      <BsCart2 />
                    </a>
                    <a className="flex-center" href="/#">
                      <TbHeart />
                    </a>
                    <a className="flex-center" href="/#">
                      <FaSearchPlus />
                    </a>
                  </div>
                  <button className="active-fp-btn">View Details</button>
                  <img src={x.image} alt="Products" />
                </div>

                <div className="featr-card-details">
                  <p className="fp-name">{x.name}</p>
                  <div className="fp-colors">
                    <div
                      className="fp-color"
                      style={{
                        backgroundColor: x["colors"]["color1"],
                      }}
                    ></div>
                    <div
                      className="fp-color"
                      style={{ backgroundColor: x["colors"]["color2"] }}
                    ></div>
                    <div
                      className="fp-color"
                      style={{ backgroundColor: x["colors"]["color3"] }}
                    ></div>
                  </div>
                  <p className="fp-code-price">Code - {x.code}</p>
                  <p className="fp-code-price">{x.price}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        {/* </div> */}

        {/* <div className="feature-prod-container">
          {record.featuredproducts.map((x) => {
            return (
              <div className="featr-card">
                <div className="featr-card-img">
                  <img src={x.image} alt="Products" />
                </div>
                <div className="featr-card-details">
                  <p className="fp-name">{x.name}</p>
                  <div className="fp-colors">
                    <div
                      className="fp-color"
                      style={{
                        backgroundColor: x["colors"]["color1"],
                      }}
                    ></div>
                    <div
                      className="fp-color"
                      style={{ backgroundColor: x["colors"]["color2"] }}
                    ></div>
                    <div
                      className="fp-color"
                      style={{ backgroundColor: x["colors"]["color3"] }}
                    ></div>
                  </div>
                  <p className="fp-code-price">Code - {x.code}</p>
                  <p className="fp-code-price">{x.price}</p>
                </div>
              </div>
            );
          })} */}

        {/* <div className="featr-card">
            <div className="featr-card-img active">
              <div className="active-fp-icons">
                <p
                  style={{
                    color: "#2F1AC4",
                    backgroundColor: "#EEEFFB",
                  }}
                >
                  <BsCart2 />
                </p>
                <p>
                  <TbHeart />
                </p>
                <p>
                  <FaSearchPlus />
                </p>
              </div>
              <img src={FP2} alt="Products" />
              <button className="active-fp-btn">View Details</button>
            </div>
            <div className="featr-card-details active">
              <p className="fp-name">Cantilever chair</p>
              <div className="fp-colors">
                <div
                  className="fp-color"
                  style={{ backgroundColor: "#05e6b7" }}
                ></div>
                <div
                  className="fp-color"
                  style={{ backgroundColor: "#f701a8" }}
                ></div>
                <div
                  className="fp-color"
                  style={{ backgroundColor: "#ffeac1" }}
                ></div>
              </div>
              <p className="fp-code-price">Code - Y523201</p>
              <p className="fp-code-price">$42.00</p>
            </div>
          </div> */}
        {/* </div> */}
        {/* <div className="featr-prod-nav">
          <div className="fp-page-nav active"></div>
          <div className="fp-page-nav"></div>
          <div className="fp-page-nav"></div>
          <div className="fp-page-nav"></div>
        </div> */}
      </section>
    </Fragment>
  );
};
