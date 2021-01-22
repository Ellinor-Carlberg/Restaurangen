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
        <div><h4>desserts/food/ramen/desserts</h4>
        <h4>desserts/food/ramen/desserts</h4>
        </div>
          <div><h3>
            asian fusion<hr></hr>
          </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;