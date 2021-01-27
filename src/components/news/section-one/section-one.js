import React from "react";
import "./section-one.css";
import mountain from "../../../media/images/orangechair.jpg";

function SectionOne() {
  return (
    <div class="np-s1-background">
      <div class="np-s1-relative">
        <img src={mountain} alt="chair"></img>
        <h1 class="np-s1-heading">news</h1>
        <div class="np-s1-text-body">
          <h3>latest updates <hr></hr></h3>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
