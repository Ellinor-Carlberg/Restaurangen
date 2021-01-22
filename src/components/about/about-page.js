import React from "react";
import "./about-page.css";
import SectionOne from "./section-one/section-one.js";
import SectionTwo from "./section-two/section-two.js";
import SectionThree from "./section-three/section-three.js";

function AboutPage() {
  return (
    <div>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    </div>
  );
}

export default AboutPage;