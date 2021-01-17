import React from "react";
import "./section-five-six.css";
import mountain from "../../../media/mountain.jpg";

function SectionFiveAndSix() {
  return (

    <div class="s5-s6-background">
    <div class="s5-wrapper">
      <img src={mountain} alt="mountain"></img>
      <h2 class="s5-heading">MENU</h2>

      <div class="s5-body-text">
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
    <div class="s6-wrapper">
      <img src={mountain} alt="mountain"></img>
      <h2 class="s6-heading">LATEST NEWS</h2>

      <div class="s6-body-text">
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
  </div>
     );
}

export default SectionFiveAndSix;