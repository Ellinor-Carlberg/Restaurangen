import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div class="header-wrapper">
      <h3 class="logo">logga</h3>
      <nav>
        <h3>
          <NavLink to="/" exact>
            home
          </NavLink>
        </h3>
        <h3>
          <NavLink to="/menu">menu</NavLink>
        </h3>
        <h3>
          <NavLink to="/about">about</NavLink>
        </h3>
        <h3>
          <NavLink to="/news">news</NavLink>
        </h3>
      </nav>
    </div>
  );
}

export default Header;
