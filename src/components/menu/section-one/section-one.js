import React from "react";
import "./section-one.css";
import mountain from "../../../media/images/menu-s1.jpg";

function SectionOne() {
  return (
    <div class="mp-s1-background">
      <div class="mp-s1-relative">
        <img src={mountain} alt="dumplings"></img>
        <h1 class="mp-s1-heading">our menu</h1>
        <div class="mp-s1-text-body">
          <div>
            <h4>small dishes/ramen/desserts
            <br></br>cocktails & other drinks</h4>
          </div>
          <div>
            <h3>
            Asian fushion
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
