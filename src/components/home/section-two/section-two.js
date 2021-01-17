import React from "react";
import "./section-two.css";
import mountain from "../../../media/mountain.jpg";

function SectionTwo() {
  return (
    <div class="s2-relative">
      <img src={mountain} alt="mountain"></img>
      <div class="s2-text">
        <div class="s2-text-body">
          <h4>
            a little bit about us<hr></hr>
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
        <div class="s2-heading">
          <h2>hello</h2>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
