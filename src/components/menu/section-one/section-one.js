import React from "react";
import "./section-one.css";
import mountain from "../../../media/mountain.jpg";

function SectionOne() {
  return (
    <div class="mp-s1-background">
      <div class="mp-s1-relative">
        <img src={mountain} alt="mountain"></img>
        <div class="mp-s1-text">
          <h1>our menu</h1>
          <h3>
            asian fusion restaurant<hr></hr>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;