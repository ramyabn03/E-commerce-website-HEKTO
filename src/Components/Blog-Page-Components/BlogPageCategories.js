import React, { Fragment } from "react";
import "./BlogPageCategories.css";
import { TbSearch } from "react-icons/tb";
import RP1 from "../../Assets/Blog-Page-imgs/RP1.png";
import RP2 from "../../Assets/Blog-Page-imgs/RP2.png";
import RP3 from "../../Assets/Blog-Page-imgs/RP3.png";
import RP4 from "../../Assets/Blog-Page-imgs/RP4.png";
import SP1 from "../../Assets/Blog-Page-imgs/SP1.png";
import SP2 from "../../Assets/Blog-Page-imgs/SP2.png";
import SP3 from "../../Assets/Blog-Page-imgs/SP3.png";
import BOP1 from "../../Assets/Blog-Page-imgs/BOP1.png";
import BOP2 from "../../Assets/Blog-Page-imgs/BOP2.png";
import BOP3 from "../../Assets/Blog-Page-imgs/BOP3.png";
import BOP4 from "../../Assets/Blog-Page-imgs/BOP4.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export const BlogPageCategories = () => {
  return (
    <Fragment>
      <section className="blog-page-categories">
        <div className="bp-cat-search">
          <h2 className="categories-title">Search</h2>
          <div className="bp-search-ip">
            <input type="text" placeholder="Search For Posts" />
            <p>
              <TbSearch />
            </p>
          </div>
        </div>
        <div className="bp-categories">
          <h2 className="categories-title">Categories</h2>
          <div className="bp-cat-types">
            <p className="cat-type-text active flex-center">Hobbies (14)</p>
            <p className="cat-type-text flex-center">Women (21)</p>
            <p className="cat-type-text flex-center">Women (21)</p>
            <p className="cat-type-text flex-center">Women (21)</p>
            <p className="cat-type-text flex-center">Women (21)</p>
            <p className="cat-type-text flex-center">Women (21)</p>
          </div>
        </div>
        <div>
          <h2 className="categories-title">Recent Post</h2>
          <div className="rp-cards">
            <div className="rp-card">
              <img src={RP1} alt="Posts" />
              <div>
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
            <div className="rp-card">
              <img src={RP2} alt="Posts" />
              <div>
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
            <div className="rp-card">
              <img src={RP3} alt="Posts" />
              <div>
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
            <div className="rp-card">
              <img src={RP4} alt="Posts" />
              <div>
                <p>It is a long established fact</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="categories-title">Sale Product</h2>
          <div className="rp-cards">
            <div className="rp-card">
              <img src={SP1} alt="Posts" />
              <div>
                <p>Elit ornare in enim mauris.</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
            <div className="rp-card">
              <img src={SP2} alt="Posts" />
              <div>
                <p>Viverra pulvinar et enim.</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
            <div className="rp-card">
              <img src={SP3} alt="Posts" />
              <div>
                <p>Mattis varius donec fdsfd</p>
                <p>Aug 09 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="categories-title">Offer product</h2>
          <div className="blog-offer-products">
            <div className="blog-offer-product-card">
              <img src={BOP1} alt="Offer Products" />
              <p className="bop-text1">Duis lectus est.</p>
              <p className="bop-text2">$12.00 - $15.00</p>
            </div>
            <div className="blog-offer-product-card">
              <img src={BOP2} alt="Offer Products" />
              <p className="bop-text1">Sed placerat.</p>
              <p className="bop-text2">$12.00 - $15.00</p>
            </div>
            <div className="blog-offer-product-card">
              <img src={BOP3} alt="Offer Products" />
              <p className="bop-text1">Netus proin.</p>
              <p className="bop-text2">$12.00 - $15.00</p>
            </div>
            <div className="blog-offer-product-card">
              <img src={BOP4} alt="Offer Products" />
              <p className="bop-text1">Platea in.</p>
              <p className="bop-text2">$12.00 - $15.00</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="categories-title">Follow</h2>
          <div className="bp-follow-icons">
            <p className="flex-center" style={{ backgroundColor: "#5625DF" }}>
              <FaFacebookF />
            </p>
            <p className="flex-center" style={{ backgroundColor: "#FF27B7" }}>
              <AiFillInstagram />
            </p>
            <p className="flex-center" style={{ backgroundColor: "#37DAF3" }}>
              <FaTwitter />
            </p>
          </div>
        </div>
        <div>
          <h2 className="categories-title">Tags</h2>
          <div className="bp-cat-tags">
            <a href="/#">General</a>
            <a className="active" href="/#">
              Atsanil
            </a>
            <a href="/#">Insas.</a>
            <a href="/#">Bibsaas</a>
            <a href="/#">Nulla.</a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
