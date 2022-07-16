import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <div className="home__text-box">
          <h1 className="home__heading-primary-box">
            <span className="home__heading-primary">We don't do fashion</span>
            <span className="home__heading-sub">We are fashion</span>
          </h1>
          <a href="/shop" className="btn btn-white btn-animated">
            Shop
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
