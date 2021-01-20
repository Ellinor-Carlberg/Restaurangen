import React from "react";
import "./header.css";
import Navigation from "../navigation/navigation.js";
import { ReactComponent as Logo } from "../../../media/svg/miri-logo.svg";

function Header() {
  return (
    <div class="header-wrapper">
      <div class="logo-wrapper">
        <Logo class="logo" />
      </div>
      <div class="nav-wrapper">
        <Navigation class="nav" />
      </div>
    </div>
  );
}

export default Header;
