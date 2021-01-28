import React from "react";
import "./section-one.css";
import mountain from "../../../media/images/happening.jpg";

function SectionOne() {
  return (
    <div class="ap-s1-background">
      <div class="ap-s1-relative">
        <img src={mountain} alt="yellow paper"></img>
        <h1 class="ap-s1-heading">About us</h1>
        <div class="ap-s1-text-body">
          <h3>and elliot saito</h3>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
