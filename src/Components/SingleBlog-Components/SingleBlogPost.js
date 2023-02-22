import React, { Fragment } from "react";
import "./SingleBlogPost.css";
import { FaPenNib } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaComment } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import P1 from "../../Assets/Blog-Page-imgs/P1.png";
import SBP1 from "../../Assets/Single-Blog-imgs/SBP1.png";
import SBP2 from "../../Assets/Single-Blog-imgs/SBP2.png";
import SBP3 from "../../Assets/Single-Blog-imgs/SBP3.png";
import SBP4 from "../../Assets/Single-Blog-imgs/SBP4.png";
import SBV from "../../Assets/Single-Blog-imgs/SBV.png";
import SBI from "../../Assets/Single-Blog-imgs/SBI.png";
import SBCard1 from "../../Assets/Single-Blog-imgs/SBCard.png";
import SBCard2 from "../../Assets/Single-Blog-imgs/SBCard2.png";

export const SingleBlogPost = () => {
  return (
    <Fragment>
      <section className="single-bolg-post-container">
        <div className="blog-post-card sbp-post-card">
          <img className="bp-img" src={P1} alt="Blog Posts" />
          <div className="bp-img-text">
            <div className="flex-center">
              <p
                style={{
                  color: "#FB2E86",
                }}
              >
                <FaPenNib />
              </p>
              <p className="bp-icon one">Surf Auxion</p>
            </div>
            <div className="flex-center">
              <p
                style={{
                  color: "#FFA454",
                }}
              >
                <MdOutlineDateRange />
              </p>
              <p className="bp-icon two">August 09 2020</p>
            </div>
          </div>
          <h3>Mauris at orci non vulputate diam tincidunt nec.</h3>
          <p className="bp-detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
            malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
            purus, cursus vulputate id id dictum at.
          </p>
          <a href="/#">
            Read More
            <span>
              <BsDot />
            </span>
          </a>
          <p className="bp-detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,{" "}
          </p>
          <div className="sbp-qoute flex-center">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Commodo dictum sapien, amet,
              consequat toamk risusu”
            </p>
          </div>
          <div className="sbp-vedio-img">
            <div className="sbp-vedio-play">
              <p className="sbp-play-icon flex-center">
                <BsFillPlayFill />
              </p>
              <img src={SBV} alt="Blog Posts" />
            </div>
            <img src={SBI} alt="Blog Posts" />
          </div>
          <p className="bp-detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>
          <div className="single-blog-products">
            <div className="sbp-product-card">
              <img src={SBP1} alt="Blog Products" />
              <p>Quam sed</p>
              <div className="sbp-prod-details">
                <p>$32.00</p>
                <p>$56.00</p>
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <p className="not-given">
                    <AiFillStar />
                  </p>
                </p>
              </div>
            </div>
            <div className="sbp-product-card">
              <img src={SBP2} alt="Blog Products" />
              <p>Tristique sed</p>
              <div className="sbp-prod-details">
                <p>$32.00</p>
                <p>$56.00</p>
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <p className="not-given">
                    <AiFillStar />
                  </p>
                </p>
              </div>
            </div>
            <div className="sbp-product-card">
              <img src={SBP3} alt="Blog Products" />
              <p>A etiam</p>
              <div className="sbp-prod-details">
                <p>$32.00</p>
                <p>$56.00</p>
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <p className="not-given">
                    <AiFillStar />
                  </p>
                </p>
              </div>
            </div>
            <div className="sbp-product-card">
              <img src={SBP4} alt="Blog Products" />
              <p>Mi nisi</p>
              <div className="sbp-prod-details">
                <p>$32.00</p>
                <p>$56.00</p>
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <p className="not-given">
                    <AiFillStar />
                  </p>
                </p>
              </div>
            </div>
          </div>
          <p className="bp-detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>
          <p className="bp-detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>
          <div className="sbp-follow">
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
          <div className="sbp-prev-page">
            <p className="flex-center">
              <BsArrowLeft />
              &nbsp; Previous Post
            </p>
            <p className="flex-center">
              Next Post &nbsp;
              <BsArrowRight />
            </p>
          </div>
          <div className="sbp-cards-img">
            <div className="sbp-card">
              <img src={SBCard1} alt="Blog Posts" />
              <div>
                <span>Sapien ac</span>
                <span>Jan 09 2020</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in
                  vitae rutrum vulputate consectetur.
                </p>
              </div>
            </div>
            <div className="sbp-card">
              <img src={SBCard2} alt="Blog Posts" />
              <div>
                <span>Sapien ac</span>
                <span>Jan 09 2020</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in
                  vitae rutrum vulputate consectetur.
                </p>
              </div>
            </div>
          </div>
          <section className="sbp-contact-box">
            <div className="sbp-name-email">
              <p className="sbp-user sbp-contact-icons">
                <FaUserAlt />
              </p>
              <input type="text" placeholder="Your Name*" />
              <p className="sbp-email sbp-contact-icons">
                <GrMail />
              </p>
              <input type="email" placeholder="Write Your Email*" />
              <p className="sbp-comment sbp-contact-icons">
                <FaComment />
              </p>
            </div>
            <textarea type="text" placeholder="Write your comment*" />

            <div className="sbp-contact-bottom-tag">
              <input type="checkbox" />
              <p>
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <button className="btn-to-shop sbp-contact-btn">
              Continue Shipping
            </button>
          </section>
        </div>
      </section>
    </Fragment>
  );
};
