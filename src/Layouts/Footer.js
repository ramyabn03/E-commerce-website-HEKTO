import React, { Fragment } from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <Fragment>
      <section className="container footer-container">
        <div className="footer-subbox">
          <h3 className="footer-title">Hekto</h3>
          <div className="footer-email-signup">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn-to-shop footer-signup-btn">Sign Up</button>
          </div>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/#">
                Contact Info
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-subbox">
          <h3 className="footer-subtitle">Catagories</h3>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/#">
                Laptops & Computers
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Cameras & Photography
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Smart Phones & Tablets
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Video Games & Consoles
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Waterproof Headphones
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-subbox">
          <h3 className="footer-subtitle">Customer Care</h3>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/#">
                My Account
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Discount
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Returns
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Orders History
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Order Tracking
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-subbox">
          <h3 className="footer-subtitle">Pages</h3>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="/#">
                Blog
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Browse the Shop
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Category
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Pre-Built Pages
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                Visual Composer Elements
              </a>
            </li>
            <li>
              <a className="footer-link" href="/#">
                WooCommerce Pages
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="container footer-bottom">
        <p>©Webecy - All Rights Reserved</p>
        <div className="footer-icons">
          <p className="flex-center">
            <FaFacebookF />
          </p>
          <p className="flex-center">
            <AiFillInstagram />
          </p>
          <p className="flex-center">
            <FaTwitter />
          </p>
        </div>
      </section>
    </Fragment>
  );
};
