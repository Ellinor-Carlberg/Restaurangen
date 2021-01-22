import React from "react";
import "./menu-page.css";
import SectionOne from "./section-one/section-one.js"
import SectionTwoAndThree from "./section-two-three/section-two-three.js"
import SectionFour from "./section-four/section-four.js"

function MenuPage() {
  return (
    <div class="mp-wrapper">
      <SectionOne />
      <SectionTwoAndThree />
      <SectionFour />
      <div>Section five and six</div>
    </div>
  );
}

export default MenuPage;
