import React from "react";
import "./section-one.css";
import Header from "../../header/header.js";
import mountain from "../../../media/mountain.jpg";

function SectionOne() {
  return (
  <div class="hp-s1-background">
  <Header />
  <div class="s1-relative">
    <img src={mountain} alt="mountain"></img>
    <div class="s1-text">
      <h1>welcome</h1>
      <h1>
        <span>to </span>
        <span>miri</span>
      </h1>
      <h4>
        asian fusion restaurant<hr></hr>
      </h4>
    </div>
  </div>
</div>
  );
}

export default SectionOne;
