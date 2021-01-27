import React from "react";
import "./header.css";
import Navigation from "../navigation/navigation.js";
import { ReactComponent as Logo } from "../../../media/svg/miri-logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div class="header-wrapper">
      <NavLink className="nav-link logo-wrapper" to="/" exact>
        <Logo class="logo" />
        <h4><span class="hidden-logo">restaurant </span>miri</h4>
      </NavLink>

      <div class="nav-wrapper">
        <Navigation class="nav" />
      </div>
    </div>
  );
}

export default Header;
