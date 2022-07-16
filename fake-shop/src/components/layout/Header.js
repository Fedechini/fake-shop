import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <header className="main-header">
        <div className="main-header__logo">
          <h1>FakeStore</h1>
        </div>
        <nav className="main-header__right">
          <a href="/" className="main-header__nav-link">
            HOME
          </a>
          <a href="/shop" className="main-header__nav-link">
            SHOP
          </a>
          <a href="/contact" className="main-header__nav-link">
            CONTACT
          </a>
          <a href="/account" className="main-header__nav-link">
            <CgProfile />
          </a>
          <a href="/cart" className="main-header__nav-link">
            <BiShoppingBag />
          </a>
          <a href="/wishlist" className="main-header__nav-link">
            <AiOutlineHeart />
          </a>
        </nav>
      </header>
    </>
  );
}
