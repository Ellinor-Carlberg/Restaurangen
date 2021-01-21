import React, { useState } from "react";
import "./hamburger-menu.css";
import Navigation from "../navigation/navigation.js";

function HamburgerMenu() {
  //showMenu the state of the menu, setShowMenu -sets the state, state -false: closed. state -true open.
  const [showMenu, setShowMenu] = useState(false);
  const changeStateFromNav = () => {
    setShowMenu(!showMenu);
  };

  let menu;
  let menuIcon;

  if (showMenu) {
    menu = (
      <div className="menu ">
        <Navigation onClick={changeStateFromNav} />
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
        <nav onClick={() => setShowMenu(!showMenu)}>{menuIcon}</nav>
      </div>
      <div class="menu-wrapper">{menu}</div>
    </div>
  );
}

export default HamburgerMenu;
