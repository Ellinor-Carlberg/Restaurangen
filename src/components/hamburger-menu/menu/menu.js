import React from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";

function Menu() {

  return (
    <div className="menu">
    <nav>
      <h4>
        <NavLink class="nav-link" to="/" exact>
          home
        </NavLink>
      </h4>
      <h4>
        <NavLink class="nav-link" to="/menu">
          menu
        </NavLink>
      </h4>
      <h4>
        <NavLink class="nav-link" to="/about">
          about
        </NavLink>
      </h4>
      <h4>
        <NavLink class="nav-link" to="/news">
          news
        </NavLink>
      </h4>
    </nav>
  </div>
  );
}

export default Menu;
