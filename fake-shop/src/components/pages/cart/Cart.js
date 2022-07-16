import React, { useEffect, useState } from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { AiOutlineDelete } from "react-icons/ai";
import uniqid from "uniqid";

export default function Cart(props) {
  const [cart, setCart] = useState([]);
  const [uniqueItems, setUniqueItems] = useState([]);
  const getCartData = props.getCartData;
  const removeCartItem = props.removeCartItem;

  // ADD TO CART FUNCITON (change this later with redux - duplicated code)
  const addToCart = (item) => {
    const newCart = cart;
    newCart.push(item);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const getItemQty = (id) => {
    const itemQty = [...cart.filter((item) => item.id === id)];
    return itemQty.length;
  };

  // ADD ITEM IN CART
  const handleAddItem = (item) => {
    addToCart(item);
    setCart(getCartData());
  };

  // REMOVE ONE ITEM IN CART
  const handleDeleteItem = (item) => {
    const newCart = cart;
    const index = newCart.indexOf(item);
    if (index > -1) {
      newCart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(getCartData());
  };

  useEffect(() => {
    setCart(getCartData());
  }, []);

  useEffect(() => {
    setUniqueItems([...new Map(cart.map((item) => [item.id, item])).values()]);
  }, [cart]);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <div className="cart__empty">
          <div className="cart__empty-msg">
            <h1>
              Your cart is empty<br></br>Fill it up with our collection!
            </h1>
            <a className="btn-black" href="/shop">
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
      <section className="cart">
        {
          <div className="cart__box">
            <h2>My cart ({cart.length} items)</h2>
            <div className="cart__items-list">
              {uniqueItems.map((item) => {
                return (
                  <div className="cart__item" key={uniqid()}>
                    <div className="cart__item-left">
                      <img
                        className="cart__item-img"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="cart__item-right">
                      <p>{item.title.slice(0, 25)}...</p>
                      <p>${item.price}</p>
                      <div className="cart__item-qty">
                        <p>Qty: {getItemQty(item.id)}</p>
                        <button
                          className="cart__btn-add"
                          onClick={() => handleAddItem(item)}
                        >
                          +
                        </button>
                        <button
                          className="cart__btn-minus"
                          onClick={() => handleDeleteItem(item)}
                        >
                          -
                        </button>
                      </div>
                      <button
                        className="cart__btn-remove"
                        onClick={() => setCart(removeCartItem(item.id))}
                      >
                        <AiOutlineDelete /> remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart__price">
              <h3>Total</h3>
              <div className="cart__price-sub">
                <p>Sub-total</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="cart__price-shipping">
                <p>Shipping</p>
                <p>FREE</p>
              </div>
              <div className="cart__price-total">
                <h3>Total (GST incl.)</h3>
                <h3>${totalPrice.toFixed(2)}</h3>
              </div>
              <button
                className="order-btn btn-black"
                onClick={() => {
                  alert("this is only a fake store");
                }}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        }
      </section>
      <Footer />
    </>
  );
}
