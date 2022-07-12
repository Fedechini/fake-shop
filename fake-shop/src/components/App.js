import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import backgrounImg from "./images/main-home.jpeg";

export default function App() {
  return (
    <>
      <Header />
      <main className="home-main">
        <div className="home-main__left">
          <div>
            We don't do<br></br> fashion, we are<br></br> fashion
          </div>
          <a className="home-main__shop-btn" href="/shop">
            SHOP NOW
          </a>
        </div>
        <div className="home-main__right">
          <img className="home-main__img" src={backgrounImg} />
        </div>
      </main>
      <Footer />
    </>
  );
}
