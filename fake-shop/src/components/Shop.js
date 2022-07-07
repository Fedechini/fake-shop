import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Shop(props) {
  const products = props.products;
  const addToCart = props.addToCart;

  return (
    <>
      <Header />
      <div className="shop__product-list">
        {products.map((product) => {
          return (
            <div className="product-container" key={product.id}>
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
