import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <section className="home">
          <div className="home__text-box">
            <h1 className="home__heading-primary-box">
              <span className="home__heading-primary">We don't do fashion</span>
              <span className="home__heading-sub">We are fashion</span>
            </h1>
            <Link to="/shop" className="btn btn-white btn-animated">
              Shop
            </Link>
          </div>
        </section>

        <section className="home__prom">
          <Link to="/shop" className="home__prom-btn">
            New here? $20 off your first purchase
          </Link>
          <Link to="/shop" className="home__prom-btn">
            Get $20 credit when you refer a friend
          </Link>
        </section>

        <section className="home__cat">
          <div className="home__cat-box home__cat-women">
            <Link to="/shop" className="home__cat-link">
              <div className="home__cat-link-desc">
                <p>Shop women's</p>
              </div>
            </Link>
          </div>
          <div className="home__cat-box home__cat-men">
            <Link to="/shop" className="home__cat-link">
              <div className="home__cat-link-desc">
                <p>Shop men's</p>
              </div>
            </Link>
          </div>
          <div className="home__cat-box home__cat-kids">
            <Link to="/shop" className="home__cat-link">
              <div className="home__cat-link-desc">
                <p>Shop kids</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
