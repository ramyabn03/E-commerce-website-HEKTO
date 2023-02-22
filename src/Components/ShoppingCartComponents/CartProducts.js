import React, { Fragment } from "react";
import "./CartProducts.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import SCP1 from "../../Assets/ShoppingCart-page-imgs/SCP1.png";
import SCP2 from "../../Assets/ShoppingCart-page-imgs/SCP2.png";
import SCP3 from "../../Assets/ShoppingCart-page-imgs/SCP3.png";
import SCP4 from "../../Assets/ShoppingCart-page-imgs/SCP4.png";
import SCP5 from "../../Assets/ShoppingCart-page-imgs/SCP5.png";

export const CartProducts = () => {
  return (
    <Fragment>
      <section className="container shopping-cart-container">
        <section className="cartproduct-table">
          <div className="cartproduct-table-grid">
            <p className="table-header">Product</p>
            <p className="table-header">Price</p>
            <p className="table-header">Quantity</p>
            <p className="table-header">Total</p>
          </div>
          <div className="cartproduct-table-grid cp-bottom-border">
            <div className="cp-product-box flex-center">
              <div className="cp-p-img">
                <img src={SCP1} alt="product" />
                <p className="flex-center">
                  <ImCross />
                </p>
              </div>
              <div className="p-info">
                <p>Ut diam consequat</p>
                <span>Color:</span>
                <p className="cp-color-size-text"> Brown</p>
                <br />
                <span>Size:</span>
                <p className="cp-color-size-text"> XL</p>
              </div>
            </div>
            <div className="cp-price-box">$32.00</div>
            <div>
              <div className="cp-quantity-box flex-center">
                <button className="flex-center">-</button>
                <p className="flex-center">1</p>
                <button className="flex-center">+</button>
              </div>
            </div>
            <div className="cp-total-box">£219.00</div>
          </div>
          <div className="cartproduct-table-grid cp-bottom-border">
            <div className="cp-product-box flex-center">
              <div className="cp-p-img">
                <img src={SCP2} alt="product" />
                <p className="flex-center">
                  <ImCross />
                </p>
              </div>
              <div className="p-info">
                <p>Vel faucibus posuere</p>
                <span>Color:</span>
                <p className="cp-color-size-text"> Brown</p>
                <br />
                <span>Size:</span>
                <p className="cp-color-size-text"> XL</p>
              </div>
            </div>
            <div className="cp-price-box">$32.00</div>
            <div>
              <div className="cp-quantity-box flex-center">
                <button className="flex-center">-</button>
                <p className="flex-center">1</p>
                <button className="flex-center">+</button>
              </div>
            </div>
            <div className="cp-total-box">£219.00</div>
          </div>
          <div className="cartproduct-table-grid cp-bottom-border">
            <div className="cp-product-box flex-center">
              <div className="cp-p-img">
                <img src={SCP3} alt="product" />
                <p className="flex-center">
                  <ImCross />
                </p>
              </div>
              <div className="p-info">
                <p>Ac vitae vestibulum</p>
                <span>Color:</span>
                <p className="cp-color-size-text"> Brown</p>
                <br />
                <span>Size:</span>
                <p className="cp-color-size-text"> XL</p>
              </div>
            </div>
            <div className="cp-price-box">$32.00</div>
            <div>
              <div className="cp-quantity-box flex-center">
                <button className="flex-center">-</button>
                <p className="flex-center">1</p>
                <button className="flex-center">+</button>
              </div>
            </div>
            <div className="cp-total-box">£219.00</div>
          </div>
          <div className="cartproduct-table-grid cp-bottom-border">
            <div className="cp-product-box flex-center">
              <div className="cp-p-img">
                <img src={SCP4} alt="product" />
                <p className="flex-center">
                  <ImCross />
                </p>
              </div>
              <div className="p-info">
                <p>Elit massa diam</p>
                <span>Color:</span>
                <p className="cp-color-size-text"> Brown</p>
                <br />
                <span>Size:</span>
                <p className="cp-color-size-text"> XL</p>
              </div>
            </div>
            <div className="cp-price-box">$32.00</div>
            <div>
              <div className="cp-quantity-box flex-center">
                <button className="flex-center">-</button>
                <p className="flex-center">1</p>
                <button className="flex-center">+</button>
              </div>
            </div>
            <div className="cp-total-box">£219.00</div>
          </div>
          <div className="cartproduct-table-grid cp-bottom-border">
            <div className="cp-product-box flex-center">
              <div className="cp-p-img">
                <img src={SCP5} alt="product" />
                <p className="flex-center">
                  <ImCross />
                </p>
              </div>
              <div className="p-info">
                <p>Proin pharetra elementum</p>
                <span>Color:</span>
                <p className="cp-color-size-text"> Brown</p>
                <br />
                <span>Size:</span>
                <p className="cp-color-size-text"> XL</p>
              </div>
            </div>
            <div className="cp-price-box">$32.00</div>
            <div>
              <div className="cp-quantity-box flex-center">
                <button className="flex-center">-</button>
                <p className="flex-center">1</p>
                <button className="flex-center">+</button>
              </div>
            </div>
            <div className="cp-total-box">£219.00</div>
          </div>
          <div className="cp-table-btn">
            <button>Update Cart</button>
            <button>Clear Cart</button>
          </div>
        </section>
        <section className="cart-products-cal flex-center">
          <div className="cart-cal-cards flex-center">
            <h3 className="cart-cal-heading">Cart Totals</h3>
            <div className="ct-card">
              <div className="ct-card-info">
                <p>Subtotals:</p>
                <span>£219.00</span>
              </div>
              <div className="ct-card-info">
                <p>Totals:</p>
                <span>£325.00</span>
              </div>
              <p className="ct-tag-line">
                <span>
                  <TiTick />
                </span>
                &emsp; Shipping & taxes calculated at checkout
              </p>
              <button>Proceed To Checkout</button>
            </div>
          </div>

          <div className="cart-cal-cards flex-center">
            <h3 className="cart-cal-heading">Calculate Shopping</h3>
            <div className="cal-ship-card">
              <input type="text" className="tex" placeholder="Bangladesh" />
              <input type="text" placeholder="Mirpur Dhaka - 1200" />
              <input type="text" placeholder="Postal Code" />
              <button>Calculate Shiping</button>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};
