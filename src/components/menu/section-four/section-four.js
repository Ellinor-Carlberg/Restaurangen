import React from "react";
import "./section-four.css";
import mountain from "../../../media/mountain.jpg";

function SectionFour() {
  return (
    <div class="mp-s4-wrapper">
      <div class="mp-s4-relative">
        <img src={mountain} alt="mountain"></img>
        <div class="mp-s4-heading-small">
          <h2 class="h4-small">Desserts</h2>
        </div>
        <div class="mp-s4-menu">
          <h3>hello</h3>
          <div class="mp-s4-menu-text-wrapper-border">
            <div class="mp-s4-menu-text-wrapper">
              <h2 class="mp-s4-menu-heading">something</h2>
              <h2 class="mp-s4-menu-heading">sweet</h2>
              <div class="mp-s4-menu-text">
                <div class="mp-s4-menu-text-col1">
                  <h5>
                    "For the people, food is heaven. ” This is as true in
                    tropical chili-loving Sichuan as among the hunters on the
                    snow-capped peaks of the Himalayas. Likewise in the
                    cumin-scented Muslim deserts on the Silk Road in Xinjiang or
                    along the coasts with a seafood feast in the cities of
                    Shanghai and Hong Kong. So let the journey begin! We want to
                    recommend you to eat here with us in the same way as you do
                    there! Which means that you order a bunch of dishes that you
                    then eat together. We are more than happy to help you with
                    recommendations on what should be eaten with what and how.
                    It does not have to be more difficult than that. Warm
                    welcome!
                  </h5>
                </div>
                <div class="mp-s4-menu-text-col2">
                  <h5>
                    "For the people, food is heaven. ” This is as true in
                    tropical chili-loving Sichuan as among the hunters on the
                    snow-capped peaks of the Himalayas. Likewise in the
                    cumin-scented Muslim deserts on the Silk Road in Xinjiang or
                    along the coasts with a seafood feast in the cities of
                    Shanghai and Hong Kong. So let the journey begin! We want to
                    recommend you to eat here with us in the same way as you do
                    there! Which means that you order a bunch of dishes that you
                    then eat together. We are more than happy to help you with
                    recommendations on what should be eaten with what and how.
                    It does not have to be more difficult than that. Warm
                    welcome!
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
