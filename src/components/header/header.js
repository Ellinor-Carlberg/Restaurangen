import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div class="header-wrapper">
      <h4 class="logo">logga</h4>
      <nav>
        <h4>
          <NavLink class="nav-link" to="/" exact>
            home
          </NavLink>
        </h4>
        <h4>
          <NavLink class="nav-link" to="/menu">menu</NavLink>
        </h4>
        <h4>
          <NavLink class="nav-link news" to="/news">news</NavLink>
        </h4>
        <h4>
          <NavLink class="nav-link" to="/about">about</NavLink>
        </h4>
       
      </nav>
    </div>
  );
}

export default Header;
