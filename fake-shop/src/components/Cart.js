import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Cart() {
  const cart = JSON.parse(localStorage.cart);
  console.log(cart);

  return (
    <>
      <Header />

      <Footer />
    </>
  );
}
