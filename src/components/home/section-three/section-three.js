import React from "react";
import "./section-three.css";
import mountain from "../../../media/mountain.jpg";

function SectionThree() {
  return (
    <div class="s3-relative">
    <img src={mountain} alt="mountain"></img>
    <div class="s3-text-heading">
      <h2>visit us</h2>
    </div>
    <div class="s3-text-body">
      <h4>
        call us on 071943670<hr></hr>
      </h4>
      <h5>
        "For the people, food is heaven. ” This is as true in tropical
        chili-loving Sichuan as among the hunters on the snow-capped peaks
        of the Himalayas. Likewise in the cumin-scented Muslim deserts on
        the Silk Road in Xinjiang or along the coasts with a seafood feast
        in the cities of Shanghai and Hong Kong. So let the journey begin!
        We want to recommend you to eat here with us in the same way as you
        do there! Which means that you order a bunch of dishes that you then
        eat together. We are more than happy to help you with
        recommendations on what should be eaten with what and how. It does
        not have to be more difficult than that. Warm welcome!
      </h5>
    </div>
  </div>

  );
}

export default SectionThree;