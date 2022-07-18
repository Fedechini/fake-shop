import React from "react";

export default function MobileLinks() {
  return (
    <nav className="mobile__nav">
      <a href="/" className="mobile__nav-link">
        HOME
      </a>
      <a href="/shop" className="mobile__nav-link">
        SHOP
      </a>
      <a href="/contact" className="mobile__nav-link">
        CONTACT
      </a>
      <a href="/account" className="mobile__nav-link">
        ACCOUNT
      </a>
      <a href="/cart" className="mobile__nav-link">
        CART
      </a>
      <a href="/wishlist" className="mobile__nav-link">
        WISHLIST
      </a>
    </nav>
  );
}
