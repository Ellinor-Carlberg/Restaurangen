import React from "react";
import "./section-four.css";
import mountain from "../../../media/images/pink11.jpg";

function SectionFour() {
  return (
    <div class="mp-s4-wrapper">
      <div class="mp-s4-relative">
        <img src={mountain} alt="mountain"></img>
        <div class="mp-s4-heading-small">
          <h2 class="h2-small">Desserts</h2>
        </div>
        <div class="mp-s4-menu">
          <h3>The most important</h3>
          <div class="mp-s4-menu-text-wrapper-border">
            <div class="mp-s4-menu-text-wrapper">
              <h2 class="mp-s4-menu-heading">something</h2>
              <h2 class="mp-s4-menu-heading">sweet</h2>
              <div class="mp-s4-menu-text">
                <div class="mp-s4-menu-text-col1">
                  <h3>Bignè</h3>
                  <h5>Red bean mousse and strawberry</h5>
                  <h4>85kr</h4>
                  <h3>COCONUT CRÈME BRÛLÉE</h3>
                  <h5>With nashi pear sorbet</h5>
                  <h4>85kr</h4>
                  <h3>Wet cake</h3>
                  <h5>Green papaya, lime and coconut</h5>
                  <h4>120kr</h4>
                </div>
                <div class="mp-s4-menu-text-col2">
                  <h3>THe icecream</h3>
                  <h5>
                    Warm chocolate chawanmushi, white miso, maple syrup and
                    cherry yogurt ice cream
                  </h5>
                  <h4>115kr</h4>

                  <h3>Apple Pie (Dessert drink)</h3>
                  <h5>Secret recipe!</h5>
                  <h4>145kr</h4>
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
