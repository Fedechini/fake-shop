import React, { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Cart({
  cart,
  removeCartItem,
  getItemQty,
  handleDeleteItem,
  uniqueItems,
  setUniqueItems,
  addToCart,
}) {
  useEffect(() => {
    setUniqueItems([...new Map(cart.map((item) => [item.id, item])).values()]);
  }, [cart]);

  const totalPrice = cart.reduce((total, item) => {
    const price = total + item.price;
    return price;
  }, 0);

  if (cart.length === 0) {
    return (
      <>
        <div className="cart__empty">
          <div className="cart__empty-msg">
            <h1>
              Your cart is empty<br></br>Fill it up with our collection!
            </h1>
            <Link className="btn-black" to="/shop">
              SHOP NOW
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="cart">
        {
          <div className="cart__box">
            <h2>My cart ({cart.length} items)</h2>
            <div className="cart__items-list">
              {uniqueItems.map((item, i) => {
                return (
                  <div className="cart__item" key={i}>
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
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                        <button
                          className="cart__btn-minus"
                          onClick={() => handleDeleteItem(i)}
                        >
                          -
                        </button>
                      </div>
                      <button
                        className="cart__btn-remove"
                        onClick={() => removeCartItem(item.id)}
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
    </>
  );
}
