import React from "react";

export default function Shop({ products, addToCart }) {
  return (
    <>
      <section className="shop">
        {products.map((product, i) => {
          return (
            <div className="shop__product" key={i}>
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
    </>
  );
}
