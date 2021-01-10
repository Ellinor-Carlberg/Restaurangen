import React from "react";
import "./header.css"
import HamburgerMenu from "./hamburger-menu/hamburger-menu.js"

function Header() {
  return (
    <div class="header-wrapper">
      <h3>logga</h3>
      <nav><h3>home</h3>
      <h3>menu</h3>
      <h3>about</h3>
      <h3>news</h3></nav>
      <HamburgerMenu />
    </div>
  );
}

export default Header;