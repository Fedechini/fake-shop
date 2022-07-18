import React, { useEffect, useState } from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/header/Header";
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

  return (
    <>
      <Header />
      <section className="shop">
        {products.map((product) => {
          return (
            <div className="shop__product" key={uniqid()}>
              <div className="shop__product-top">
                <img
                  className="shop__product-img"
                  alt={product.title}
                  src={product.image}
                />
              </div>
              <div className="shop__product-bottom">
                <p>{product.title}</p>
                <p className="shop__product-price">${product.price}</p>
                <button
                  className="shop__add-to-cart btn-black"
                  onClick={() => addToCart(product)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
