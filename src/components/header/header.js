import React from "react";
import "./header.css";
import Navigation from "../navigation/navigation.js";
function Header() {
  return (
    <div class="header-wrapper">
      <h4 class="logo">logga</h4>
      <Navigation />
    </div>
  );
}

export default Header;
