import React from "react";
import "./menu-page.css";
import SectionOne from "./section-one/section-one.js"
import SectionTwoAndThree from "./section-two-three/section-two-three.js"
import SectionFour from "./section-four/section-four.js"
import SectionFiveAndSix from "./section-five-six/section-five-six.js"

function MenuPage() {
  return (
    <div class="mp-wrapper">
      <SectionOne />
      <SectionTwoAndThree />
      <SectionFour />
      <SectionFiveAndSix />
    </div>
  );
}

export default MenuPage;
