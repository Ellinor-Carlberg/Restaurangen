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
  let menuIcon;

  if (showMenu) {
    menu = (
      <div className="menu">
        <nav>
          <h4>
            <NavLink  onClick={() => setShowMenu(!showMenu)}className="nav-link" to="/" exact>
              home
            </NavLink>
          </h4>
          <h4>
            <NavLink onClick={() => setShowMenu(!showMenu)}className="nav-link" to="/menu">
              menu
            </NavLink>
          </h4>
          <h4>
            <NavLink onClick={() => setShowMenu(!showMenu)}className="nav-link news" to="/news">
              news
            </NavLink>
          </h4>
          <h4>
            <NavLink onClick={() => setShowMenu(!showMenu)}className="nav-link" to="/about">
              about
            </NavLink>
          </h4>
        </nav>
      </div>
    );
  }
  if (showMenu) {
    menuIcon = (
      <div className="icon-wrapper">
        <div>
          <span className="letter">c</span>
          <span className="letter">l</span>
        </div>
        <div>
          <span className="letter">s</span>
          <span className="letter">e</span>
        </div>
      </div>
    );
  } else {
    menuIcon = (
      <div className="icon-wrapper">
        <div>
          <span className="letter">o</span>
          <span className="letter">p</span>
        </div>
        <div>
          <span className="letter">e</span>
          <span className="letter">n</span>
        </div>
      </div>
    );
  }

  console.log(showMenu);
  return (
    <div>
      <div class="hamburger-wrapper">
        <nav onClick={() => setShowMenu(!showMenu)}>
          {menuIcon}
        </nav>
      </div>
      <div class="menu-wrapper">{menu}</div>
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
