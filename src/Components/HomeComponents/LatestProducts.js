import React, { Fragment, useState, useEffect } from "react";
import "./LatestProducts.css";
// import LP1 from "../../Assets/Home-Page-imgs/LP1.png";
// import LP2 from "../../Assets/Home-Page-imgs/LP2.png";
// import LP3 from "../../Assets/Home-Page-imgs/LP3.png";
// import LP4 from "../../Assets/Home-Page-imgs/LP4.png";
// import LP5 from "../../Assets/Home-Page-imgs/LP5.png";
// import LP6 from "../../Assets/Home-Page-imgs/LP6.png";
import saleTag from "../../Assets/Home-Page-imgs/sale-tag.png";
import { TbHeart } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { FaSearchPlus } from "react-icons/fa";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import SO4 from "../../Assets/Home-Page-imgs/support2.png";
import SO2 from "../../Assets/Home-Page-imgs/cashback.png";
import SO1 from "../../Assets/Home-Page-imgs/free-delivery.png";
import SO3 from "../../Assets/Home-Page-imgs/premium-quality.png";
import UFP_sofa from "../../Assets/Home-Page-imgs/ufp-sofa.png";

export const LatestProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productPath, setProductPath] = useState("new-arrivals");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        `https://react-http-61ca9-default-rtdb.firebaseio.com/Products/${productPath}.json`
      );
      setData(await response.json());
      setLoading(false);
    };
    getProducts();
  }, [productPath]);

  function handleProductsFetch(event) {
    const btnId = document.getElementById(event);
    setProductPath(event);
    const ids = ["new-arrivals", "best-seller", "featured", "social-offer"];
    ids.forEach((id) => {
      const prevElement = document.getElementById(id);
      prevElement.classList.remove("active");
    });
    btnId.classList.add("active");
  }
  function handleLPHover(e) {
    const cardlpadd = document.getElementById(e);
    cardlpadd.classList.add("active");
  }
  function handleLPLeave(e) {
    const cardlprem = document.getElementById(e);
    cardlprem.classList.remove("active");
  }

  function Loading() {
    return (
      <div className="loading-box">
        <div className="col-md-3">
          <Skeleton height={200} width={300} style={{ marginBottom: "1rem" }} />
          <Skeleton height={30} width={300} />
        </div>
        <div className="col-md-6">
          <Skeleton height={200} width={300} style={{ marginBottom: "1rem" }} />
          <Skeleton height={30} width={300} />
        </div>
        <div className="col-md-6">
          <Skeleton height={200} width={300} style={{ marginBottom: "1rem" }} />
          <Skeleton height={30} width={300} />
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <section className="container products-container">
        <h2 className="secondary-title">Latest Products</h2>
        <div className="lp-nav">
          <button
            id="new-arrivals"
            className="active"
            onClick={() => handleProductsFetch("new-arrivals")}
          >
            New Arrival
          </button>
          <button
            id="best-seller"
            onClick={() => handleProductsFetch("best-seller")}
          >
            Best Seller
          </button>
          <button id="featured" onClick={() => handleProductsFetch("featured")}>
            Featured
          </button>
          <button
            id="social-offer"
            onClick={() => handleProductsFetch("social-offer")}
          >
            Social Offer
          </button>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="latest-products">
            {data.map((item, index) => {
              return (
                <div className="lp-card" key={index}>
                  <div
                    className="lp-card-img"
                    id={index}
                    onMouseEnter={() => handleLPHover(index)}
                    onMouseLeave={() => handleLPLeave(index)}
                  >
                    <div className="lp-sale-tag">
                      <img src={saleTag} alt="Sales-tag" />
                      <p className="lp-sale-text">Sale</p>
                    </div>
                    <div className="active-lp-icons">
                      <a href="/#" className="flex-center">
                        <BsCart2 />
                      </a>
                      <a href="/#" className="flex-center">
                        <TbHeart />
                      </a>
                      <a href="/#" className="flex-center">
                        <FaSearchPlus />
                      </a>
                    </div>
                    <img src={item.image} alt="Latest products" />
                  </div>
                  <div className="lp-card-text">
                    <p className="lp-card-text-name">{item.name}</p>
                    <div className="lp-card-text-price">
                      <p>{item.price}</p>
                      <p>{item.actualprice}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="lp-card">
            <div className="lp-card-img active">
              <img src={LP2} alt="Latest products" />
              <div className="lp-sale-tag">
                <img src={saleTag} alt="Sales-tag" />
                <p className="lp-sale-text">Sale</p>
              </div>
              <div className="active-lp-icons">
                <a href="/#" className="flex-center">
                  <BsCart2 />
                </a>
                <a href="/#" className="flex-center">
                  <TbHeart />
                </a>
                <a href="/#" className="flex-center">
                  <FaSearchPlus />
                </a>
              </div>
            </div>
            <div className="lp-card-text">
              <p>Comfort Handy Craft</p>
              <div className="lp-card-text-price">
                <p>$42.00</p>
                <p>$65.00</p>
              </div>
            </div>
          </div>

          <div className="lp-card">
            <div className="lp-card-img">
              <img src={LP3} alt="Latest products" />
            </div>
            <div className="lp-card-text">
              <p>Comfort Handy Craft</p>
              <div className="lp-card-text-price">
                <p>$42.00</p>
                <p>$65.00</p>
              </div>
            </div>
          </div>

          <div className="lp-card">
            <div className="lp-card-img">
              <img src={LP4} alt="Latest products" />
            </div>
            <div className="lp-card-text">
              <p>Comfort Handy Craft</p>
              <div className="lp-card-text-price">
                <p>$42.00</p>
                <p>$65.00</p>
              </div>
            </div>
          </div>

          <div className="lp-card">
            <div className="lp-card-img">
              <img src={LP5} alt="Latest products" />
            </div>
            <div className="lp-card-text">
              <p>Comfort Handy Craft</p>
              <div className="lp-card-text-price">
                <p>$42.00</p>
                <p>$65.00</p>
              </div>
            </div>
          </div>

          <div className="lp-card">
            <div className="lp-card-img">
              <img src={LP6} alt="Latest products" />
            </div>
            <div className="lp-card-text">
              <p>Comfort Handy Craft</p>
              <div className="lp-card-text-price">
                <p>$42.00</p>
                <p>$65.00</p>
              </div>
            </div>
          </div> */}
          </div>
        )}
      </section>

      <section className="container products-container">
        <h2 className="secondary-title">What Shopex Offer!</h2>
        <div className="so-points flex-center">
          <div className=" so-point-box flex-center">
            <img src={SO1} alt="Shopex offers" />
            <p>24/7 Support</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className=" so-point-box flex-center ">
            <img src={SO2} alt="Shopex offers" />
            <p>24/7 Support</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className=" so-point-box flex-center">
            <img src={SO3} alt="Shopex offers" />
            <p>24/7 Support</p>
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

      <section className="container unique-feature-container flex-center">
        <div className="ufp-img">
          <img src={UFP_sofa} alt="Sofa" />
        </div>
        <div className="ufp-details">
          <p className="ufp-text1">
            Unique Features Of leatest & Trending Poducts
          </p>
          <ul>
            <li>
              <div
                className="list-dot"
                style={{ backgroundColor: "#F52B70" }}
              ></div>
              All frames constructed with hardwood solids and laminates
            </li>
            <li>
              <div
                className="list-dot"
                style={{ backgroundColor: "#2B2BF5" }}
              ></div>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li>
              <div
                className="list-dot"
                style={{ backgroundColor: "#2BF5CC" }}
              ></div>
              Arms, backs and seats are structurally reinforced
            </li>
          </ul>
          <div className="ufp-btn-price">
            <button className="btn-to-shop">Add To Cart</button>
            <div className="ufp-btn-price-box">
              <p>B&B Italian Sofa </p>
              <p>$32.00</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
