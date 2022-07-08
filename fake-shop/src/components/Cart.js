import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Cart(props) {
  const [cart, setCart] = useState([]);
  const getCartData = props.getCartData;

  useEffect(() => {
    getCartData().then((cart) => setCart(cart));
  }, []);

  console.log(cart);

  return (
    <>
      <Header />
      {cart.map((bag) => {
        return <div key={bag.id}>{bag.item.title}</div>;
      })}
      <Footer />
    </>
  );
}
