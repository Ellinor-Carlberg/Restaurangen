import React from "react";
import "./menu-page.css";
import SectionOne from "./section-one/section-one.js"
import SectionTwoAndThree from "./section-two-three/section-two-three.js"

function MenuPage() {
  return (
    <div class="mp-wrapper">
      <SectionOne />
      <SectionTwoAndThree />
      <div>Section four</div>
      <div>Section five and six</div>
    </div>
  );
}

export default MenuPage;
