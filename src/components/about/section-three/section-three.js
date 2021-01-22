import React from "react";
import "./section-three.css";
import mountain from "../../../media/mountain.jpg";

function SectionThree() {
  return (
    <div class="ap-s3-relative">
      <img src={mountain} alt="mountain"></img>
      <div class="ap-s3-text">
        <div class="ap-s3-text-heading">
          <h2>Work with us</h2>
        </div>
        <div class="ap-s3-text-body">
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

export default SectionThree;