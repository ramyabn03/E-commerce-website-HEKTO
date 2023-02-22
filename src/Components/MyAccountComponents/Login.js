import React, { Fragment } from "react";
import "./Login.css";
import patner_brands from "../../Assets/Home-Page-imgs/patner-brands.png";

export const Login = () => {
  return (
    <Fragment>
      <section className="container each-subpage-header-box">
        <h2 className="each-page-title">My Account</h2>
        <div className="sc-page-nav">
          <a href="/#">Home</a>
          <a href="/#">. Pages</a>
          <a className="active" href="/#">
            . My Account
          </a>
        </div>
      </section>
      <section className="container myaccount-login">
        <div className="login-card">
          <h3>Login</h3>
          <p className="login-subtag">
            Please login using account detail bellow.
          </p>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <p className="login-subtag forgot-p">Forgot your password?</p>
          <button className="btn-to-shop login-btn">Sign In</button>
          <p className="login-subtag">Don’t have an Account?Create account</p>
        </div>
      </section>
      <section className="container flex-center patner-brands">
        <img src={patner_brands} alt="Logos" />
      </section>
    </Fragment>
  );
};
