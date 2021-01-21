import React from "react";
import "./section-five-six.css";
import mountain from "../../../media/mountain.jpg";

function SectionFiveAndSix() {
  return (
    <div class="s5-s6-background">
      <div class="s5-relative">
        <img src={mountain} alt="mountain"></img>
        <h2 class="s5-text-heading">MENU</h2>
        <div class="s5-text-body">
          <h3>
            call us on 071943670<hr></hr>
          </h3>
          <h5>
            "For the people, food is heaven. ” This is as true in tropical
            chili-loving Sichuan as among the hunters on the snow-capped peaks
            of the Himalayas.
          </h5>
        </div>
      </div>
      <div class="s6-relative">
        <img src={mountain} alt="mountain"></img>
        <h2 class="s6-text-heading">LATEST NEWS</h2>

        <div class="s6-text-body">
          <h3>
            call us on 071943670<hr></hr>
          </h3>
          <h5>
            "For the people, food is heaven. ” This is as true in tropical
            chili-loving Sichuan as among the hunters on the snow-capped peaks
            of the Himalayas.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default SectionFiveAndSix;
