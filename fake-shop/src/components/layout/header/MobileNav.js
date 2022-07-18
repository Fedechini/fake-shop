import React from "react";
import { useState } from "react";
import MobileLinks from "./MobileLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openIcon = (
    <GiHamburgerMenu
      className="mobile__nav-menu"
      size="5rem"
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    />
  );

  const closeIcon = (
    <AiOutlineClose
      className="mobile__nav-menu"
      size="5rem"
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    />
  );

  return (
    <>
      {menuOpen ? closeIcon : openIcon}
      {menuOpen && <MobileLinks />}
    </>
  );
}
