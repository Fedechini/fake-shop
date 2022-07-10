import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./shop.css";
import uniqid from "uniqid";

export default function Shop(props) {
  const [cart, setCart] = useState([]);
  const products = props.products;
  const getCartData = props.getCartData;

  // ADD TO CART FUNCITON
  const addToCart = (product) => {
    const newCart = cart;
    newCart.push(product);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  useEffect(() => {
    const cartData = getCartData();
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <div className="shop__product-list">
        {products.map((product) => {
          return (
            <div className="product-container" key={uniqid()}>
              <div className="product-desc-top">
                <img
                  className="product-img"
                  alt={product.title}
                  src={product.image}
                />
              </div>
              <div className="product-desc-bottom">
                <p>{product.title}</p>
                <p>${product.price}</p>
                <button
                  className="product-add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
