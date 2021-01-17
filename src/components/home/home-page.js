import React from "react";
import "./home-page.css";
import mountain from "../../media/mountain.jpg";
import SectionOne from "./section-one/section-one.js";
import SectionTwo from "./section-two/section-two.js";
import SectionThree from "./section-three/section-three.js";
import SectionFour from "./section-four/section-four.js";
import SectionFiveAndSix from "./section-five-six/section-five-six.js";

function HomePage() {
  return (
    <div class="hp-wrapper">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFiveAndSix />
    </div>
  );
}

export default HomePage;
