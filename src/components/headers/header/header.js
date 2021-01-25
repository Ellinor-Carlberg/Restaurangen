import React from "react";
import "./header.css";
import Navigation from "../navigation/navigation.js";
import { ReactComponent as Logo } from "../../../media/svg/miri-logo.svg";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <div class="header-wrapper">
      <div class="logo-wrapper">
      <NavLink  className="nav-link" to="/" exact>
      <Logo class="logo" /> </NavLink>
      </div>
      <div class="nav-wrapper">
        <Navigation class="nav" />
      </div>
    </div>
  );
}

export default Header;
