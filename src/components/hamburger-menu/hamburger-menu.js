import React, { useState } from "react";
import "./hamburger-menu.css";
/* import { MenuItems } from "./menu-items/menu-items.js" */
import { NavLink } from "react-router-dom";
/* import Menu from "./menu/menu.js";
 */
function HamburgerMenu() {
  //showMenu the state of the menu, setShowMenu -sets the state, state -false: closed. state -true open.
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = (
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

  console.log(showMenu);
  return (
    <div>
      <div class="hamburger-wrapper">
        <nav onClick={() => setShowMenu(!showMenu)}>
          <div>
            <span class="letter">o</span>
            <span class="letter">p</span>
          </div>
          <div>
            <span class="letter">e</span>
            <span class="letter">n</span>
          </div>
        </nav>
      </div>
      <div>{menu}</div>
    </div>
  );
}

export default HamburgerMenu;
/* 
function HamburgerMenu() {
  return (
    <div class="hamburger-wrapper">
      <div>
        <span class="letter">o</span>
        <span class="letter">p</span>
      </div>
      <div>
        <span class="letter">e</span>
        <span class="letter">n</span>
      </div>
    </div>
  );
}

export default HamburgerMenu;
 */
