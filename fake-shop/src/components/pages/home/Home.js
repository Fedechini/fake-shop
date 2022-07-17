import React from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="home">
          <div className="home__text-box">
            <h1 className="home__heading-primary-box">
              <span className="home__heading-primary">We don't do fashion</span>
              <span className="home__heading-sub">We are fashion</span>
            </h1>
            <a href="/shop" className="btn btn-white btn-animated">
              Shop
            </a>
          </div>
        </section>
        <section className="home__prom">
          <a href="/shop" className="home__prom-btn">
            New here? $20 off your first purchase
          </a>
          <a href="/shop" className="home__prom-btn">
            Get $20 credit when you refer a friend
          </a>
        </section>
        <section className="home__cat">
          <div className="home__cat-box home__cat-women">
            <a href="#" className="home__cat-link">
              <div className="home__cat-link-desc">
                <p>Shop women's</p>
              </div>
            </a>
          </div>
          <div className="home__cat-box home__cat-men">
            <a href="#" className="home__cat-link">
              <div className="home__cat-link-desc">
                <p>Shop men's</p>
              </div>
            </a>
          </div>
          <div className="home__cat-box home__cat-kids">
            <a href="#" className="home__cat-link">
              <div className="home__cat-link-desc">
                <p>Shop kids</p>
              </div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
