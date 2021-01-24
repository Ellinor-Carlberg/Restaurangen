import React from "react";
import "./section-one.css";
import mountain from "../../../media/mountain.jpg";

function SectionOne() {
  return (
    <div class="ap-s1-background">
      <div class="ap-s1-relative">
        <img src={mountain} alt="mountain"></img>
        <h1 class="ap-s1-heading">About us</h1>
        <div class="ap-s1-text-body">
          <h2 class="h2-small">BLABLA</h2>
          <h3>asian fusion</h3>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;