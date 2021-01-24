import React from "react";
import "./section-four.css";
import mountain from "../../../media/mountain.jpg";

function SectionFour() {
  return (
    <div class="hp-s4-relative">
      <img src={mountain} alt="mountain"></img>
      <div class="hp-s4-text">
        <div class="hp-s4-text-heading">
          <h2>book a table</h2>
        </div>
        <div class="hp-s4-text-body">
          <h3>
            There is two ways<hr></hr>
          </h3>
          <h5>
            Make your dinner reservation online by clicking the button below.{" "}
          </h5>
          <button>Book table</button>
          <h5>
            Or give us a call! If you call outside business hours, leave a
            message and someone will get back to you as soon as possible. Call
            us on:
          </h5>
          <h4 class="h4-border">+467 19 43 670</h4>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
