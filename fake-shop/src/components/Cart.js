import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { AiOutlineDelete } from "react-icons/ai";

export default function Cart(props) {
  const [cart, setCart] = useState([]);
  const getCartData = props.getCartData;
  const removeCartItem = props.removeCartItem;

  useEffect(() => {
    getCartData().then((cart) => setCart(cart));
  }, [cart]);

  const totalPrice = cart.reduce((total, bag) => {
    return total + bag.item.price;
  }, 0);

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <div className="empty-shopping-cart">
          <div className="empty-cart-msg">
            <h1>
              Your cart is empty<br></br>Fill it up with our collection!
            </h1>
            <a className="home-main__shop-btn" href="/shop">
              SHOP NOW
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {
        <div className="shopping-cart">
          <div className="cart-container">
            <h2>My cart ({cart.length} items)</h2>
            <div className="cart-items-list">
              {cart.map((bag) => {
                return (
                  <div className="cart-item" key={bag.id}>
                    <div className="cart-item__left">
                      <img
                        className="cart-item-img"
                        src={bag.item.image}
                        alt={bag.item.title}
                      />
                    </div>
                    <div className="cart-item__right">
                      <p>{bag.item.title.slice(0, 25)}...</p>
                      <p>${bag.item.price}</p>
                      <button
                        className="remove-item-btn"
                        onClick={() => removeCartItem(bag.id)}
                      >
                        <AiOutlineDelete /> remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="total-price-cart">
              <h3>Total</h3>
              <div className="sub-total">
                <p>Sub-total</p>
                <p>${totalPrice}</p>
              </div>
              <div className="shipping">
                <p>Shipping</p>
                <p>FREE</p>
              </div>
              <div className="total">
                <h3>Total (GST incl.)</h3>
                <h3>${totalPrice}</h3>
              </div>
              <button className="order-btn">PLACE ORDER</button>
            </div>
          </div>
        </div>
      }
      <Footer />
    </>
  );
}
