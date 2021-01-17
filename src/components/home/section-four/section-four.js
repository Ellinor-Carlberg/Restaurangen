import React from "react";
import "./section-four.css";
import mountain from "../../../media/mountain.jpg";

function SectionFour() {
  return (
      <div class="s4-relative">
      <img src={mountain} alt="mountain"></img>
      <div class="s4-text">
        <div class="s4-text-heading">
          <h2>book a table</h2>
        </div>
        <div class="s4-text-body">
          <h4>
            call us on 071943670<hr></hr>
          </h4>
          <h5>
            "For the people, food is heaven. ” This is as true in tropical
            chili-loving Sichuan as among the hunters on the snow-capped peaks
            of the Himalayas.
          </h5>
        </div>
      </div>
    </div>  );
}

export default SectionFour;