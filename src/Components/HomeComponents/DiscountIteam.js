import React, { Fragment, useEffect, useState } from "react";
import "./DiscountItem.css";
import { TiTick } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
// import Ditem from "../../Assets/Home-Page-imgs/DItem.png";
// import TC2 from "../../Assets/Home-Page-imgs/TC2.png";
// import TC3 from "../../Assets/Home-Page-imgs/TC3.png";
// import TC1n4 from "../../Assets/Home-Page-imgs/TC4.png";
import patner_brands from "../../Assets/Home-Page-imgs/patner-brands.png";
import Slider from "react-slick";
import "../Styles-sliders/slick.css";
import "../Styles-sliders/slick-theme-tc.css";

export const DiscountIteam = () => {
  const [productsWithOffer, setProductsWithOffer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [discountProductPath, setDiscountProductPath] = useState("woodChairs");

  const TopProducts = require("../../TopCategories.json");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://react-http-61ca9-default-rtdb.firebaseio.com/discountitems/${discountProductPath}.json`
      );
      setProductsWithOffer(await response.json());
      setLoading(false);
    };
    getProducts();
  }, [discountProductPath]);

  function handleOfferProducts(event) {
    const btnId = document.getElementById(event);
    setDiscountProductPath(event);
    const ids = ["woodChairs", "plasticChairs", "sofaCollections"];
    ids.forEach((id) => {
      const prevElement = document.getElementById(id);
      prevElement.classList.remove("active");
    });
    btnId.classList.add("active");
  }

  // console.log(TopProducts);
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.99,
    slidesToScroll: 2,
  };

  function topCatgMouseEnter(e) {
    const eleadd = document.getElementById(e);
    eleadd.classList.add("active");
  }

  function topCatgMouseLeave(e) {
    const elerem = document.getElementById(e);
    elerem.classList.remove("active");
  }

  return (
    <Fragment>
      <section className="container discount-item flex-center">
        <h2 className="secondary-title">Discount Item</h2>
        <div className="lp-nav">
          <button
            className="active flex-center"
            id="woodChairs"
            onClick={() => handleOfferProducts("woodChairs")}
          >
            Wood Chair
            <BsDot />
          </button>
          <button
            id="plasticChairs"
            onClick={() => handleOfferProducts("plasticChairs")}
          >
            Plastic Chair
            <BsDot />
          </button>
          <button
            id="sofaCollections"
            onClick={() => handleOfferProducts("sofaCollections")}
          >
            Sofa Colletion
            <BsDot />
          </button>
        </div>
        {loading ? (
          <div class="lds-dual-ring"></div>
        ) : (
          <div className="di-container">
            {productsWithOffer.map((item) => {
              return (
                <>
                  <div className="di-details">
                    <p className="di-text1">20% Discount Of All Products</p>
                    <p className="di-text2">{item.name}</p>
                    <p className="di-text3">{item.details}</p>
                    <ul className="di-text3">
                      <div>
                        <li>
                          <TiTick />
                          {item.features.point1}
                        </li>
                        <li>
                          <TiTick />
                          {item.features.point2}
                        </li>
                      </div>
                      <div>
                        <li>
                          <TiTick />
                          {item.features.point3}
                        </li>
                        <li>
                          <TiTick />
                          {item.features.point4}
                        </li>
                      </div>
                    </ul>
                    <button className="btn-to-shop">Shop Now</button>
                  </div>
                  <div className="di-img">
                    <img src={item.image} alt="Product" />
                  </div>
                </>
              );
            })}
          </div>
        )}
      </section>

      <section className="container top-catg flex-center">
        <h2 className="secondary-title">Top Categories</h2>
        <div className="tc-cards flex-center">
          <Slider {...settings}>
            {TopProducts.map((item) => {
              return (
                <div className="tc-card flex-center" key={item.tcId}>
                  <div
                    className="tc-card-img flex-center"
                    id={item.tcId}
                    onMouseEnter={() => topCatgMouseEnter(item.tcId)}
                    onMouseLeave={() => topCatgMouseLeave(item.tcId)}
                  >
                    <img src={item.image} alt="Chairs" />
                    <button className="active-fp-btn">View Details</button>
                  </div>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              );
            })}
          </Slider>
          {/* <div className="tc-card flex-center">
            <div className="tc-card-img flex-center">
              <img src={TC2} alt="Chairs" />
            </div>
            <p>Mini LCW Chair</p>
            <p>$56.00</p>
          </div>
          <div className="tc-card flex-center">
            <div className="tc-card-img flex-center">
              <img src={TC3} alt="Chairs" />
            </div>
            <p>Mini LCW Chair</p>
            <p>$56.00</p>
          </div>
          <div className="tc-card flex-center">
            <div className="tc-card-img flex-center">
              <img src={TC1n4} alt="Chairs" />
            </div>
            <p>Mini LCW Chair</p>
            <p>$56.00</p>
          </div> */}
        </div>
        {/* <div className="promotion-page-nav-box">
          <div className="promotion-page-nav active tc"></div>
          <div className="promotion-page-nav tc"></div>
          <div className="promotion-page-nav tc"></div>
        </div> */}
      </section>

      <section className="container updates-subscribe flex-center">
        <h3>Get Leatest Update By Subscribe 0ur Newslater</h3>
        <button className="btn-to-shop upd-sub-btn">Shop Now</button>
      </section>
      <section className="container patner-brands">
        <img src={patner_brands} alt="Logos" />
      </section>
    </Fragment>
  );
};
