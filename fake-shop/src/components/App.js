import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import backgrounImg from "./images/main-home.jpeg";

const url = "https://fakestoreapi.com/products";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="home-main">
          <div className="home-main__left">
            <div>
              We don't do<br></br> fashion, we are<br></br> fashion
            </div>
            <a className="home-main__shop-btn" href="/shop">
              SHOP NOW
            </a>
          </div>
          <img className="home-main__img" src={backgrounImg} />
        </div>
      </main>
      <Footer />
    </>
  );
}
