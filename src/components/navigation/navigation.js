import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = ( {onClick} ) => {
  return (
      <nav>
        <h4>
          <NavLink  onClick={onClick} className="nav-link" to="/" exact>home
          </NavLink>
        </h4>
        <h4>
          <NavLink onClick={onClick} className="nav-link" to="/menu">menu</NavLink>
        </h4>
        <h4>
          <NavLink onClick={onClick} className="nav-link news" to="/news">news</NavLink>
        </h4>
        <h4>
          <NavLink onClick={onClick} className="nav-link" to="/about">about</NavLink>
        </h4>
      </nav>
  );
}

export default Navigation;