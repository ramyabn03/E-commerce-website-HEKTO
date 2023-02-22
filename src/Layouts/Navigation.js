import React, { Fragment, useState } from "react";
import "./Navigation.css";
import { TbPhoneCall } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbChevronDown } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { TbSearch } from "react-icons/tb";
import { RiCloseLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <section className="container heading-bar">
        <div className="left-details flex-center">
          <p className="top-text-p left-icon">
            <p className="icons">
              <TbMail />
            </p>
            <span>mhhasanul@gmail.com</span>
          </p>
          <p className="top-text-p left-icon">
            <p className="icons">
              <TbPhoneCall />
            </p>
            <span>(12345)67890</span>
          </p>
        </div>

        <div className="right-details flex-center">
          <p className="top-text-p right-icon">
            English
            <p className="icons">
              <TbChevronDown />
            </p>
          </p>
          <p className="top-text-p right-icon">
            USD
            <p className="icons">
              <TbChevronDown />
            </p>
          </p>
          <p className="top-text-p right-icon">
            <span>Login</span>
            <p className="icons">
              <TbUser />
            </p>
          </p>
          <p className="top-text-p right-icon">
            <span> Wishlist</span>
            <p className="icons">
              <TbHeart />
            </p>
          </p>
          <p className="cart-icon-header">
            <BsCart2 />
          </p>
        </div>
      </section>

      <section className="container nav-bar">
        <div className="main-bar flex-center">
          <div>
            <h1>Hekto</h1>
          </div>
          <div
            className={
              showMenu
                ? "flex-center nav-bar-options nav-open"
                : "flex-center nav-bar-options"
            }
          >
            <a href="/#" className="active">
              Home <i className="fa fa-angle-down"></i>
            </a>
            <a href="/#">Pages</a>
            <a href="/#">Products</a>
            <a href="/#">Blog</a>
            <a href="/#">Shop</a>
            <a href="/#">Contact</a>
          </div>
          <div className="mobile-menu">
            <button
              className="menu-open"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FiMenu />
            </button>
            <button
              className={showMenu ? "nav-open menu-close" : "menu-close"}
              onClick={() => setShowMenu(!showMenu)}
            >
              <RiCloseLine />
            </button>
          </div>
        </div>
        <div className="search-bar flex-center">
          <input type="text" />
          <p className="search-icon">
            <TbSearch />
          </p>
        </div>
      </section>
    </Fragment>
  );
};
