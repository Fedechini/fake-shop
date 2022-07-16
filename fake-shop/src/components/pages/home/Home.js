import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="home">
          <div className="home__text-box">
            <h1 className="home__heading-primary-box">
              <span className="home__heading-primary">We don't do fashion</span>
              <span className="home__heading-sub">We are fashion</span>
            </h1>
            <a href="/shop" className="btn btn-white btn-animated">
              Shop
            </a>
          </div>
        </div>
        <div className="home__shop">
          <div className="home__shop-prom-box">
            <a href="/shop" className="home__shop-btn-prom">
              New here? $20 off your first purchase
            </a>
            <a href="/shop" className="home__shop-btn-prom">
              Get $20 credit when you refer a friend
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
