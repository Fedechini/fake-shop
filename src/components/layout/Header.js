import React from "react";
import MobileNav from "./MobileNav";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header({ cart }) {
  return (
    <>
      <header className="main-header">
        <div className="main-header__logo">
          <h1>FakeStore</h1>
        </div>
        <nav className="main-header__right">
          <Link to="/" className="main-header__nav-link">
            HOME
          </Link>
          <Link to="/shop" className="main-header__nav-link">
            SHOP
          </Link>
          <Link to="/contact" className="main-header__nav-link">
            CONTACT
          </Link>
          <Link to="/account" className="main-header__nav-link">
            <CgProfile />
          </Link>
          <Link to="/cart" className="main-header__nav-link cart-icon">
            <BiShoppingBag />
            <p className="main-header__items">{cart.length}</p>
          </Link>
          <Link to="/wishlist" className="main-header__nav-link">
            <AiOutlineHeart />
          </Link>
        </nav>
        <MobileNav />
      </header>
    </>
  );
}
