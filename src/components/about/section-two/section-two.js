import React from "react";
import "./section-two.css";
import mountain from "../../../media/images/person1.jpg";

function SectionTwo() {
  return (
    <div class="ap-s2-relative">
      <img src={mountain} alt="mountain"></img>
      <div class="ap-s2-text">
        <div class="ap-s2-text-body">
          <h3>
            From japan to sweden<hr></hr>
          </h3>
          <h5>
          Restaurant Miri is own and driven by Elliot Chow. Maybe you have heard of him because of his mini-bao looking like burgers that he started selling at the Western Market long before opening his own restaurant. Or maybe you got to know who he was when he got nominated for Best Chef by The Table's 50 Best Asian Restaurants in 2017.<br></br> Elliot is a Japanese-born chef but when he was 12years his family moved to Sweden. With him Elliot took the love for the asian cuisine.
Now Elliot have teamed up with his favorite partners and started Restaurant Miri in 2019. Elliot named the restaurant Miri after his beloved childhood cat Miri who always loved to be in the kitchen with him and taste some of his cooking.<br></br>
</h5>
<h4>How to describe restaurant Miri</h4>

<h5>
          We are just a casual neigborhood spot that celebrates goof food and good people. We draw inspiration from the various comfort foods of Asia and the diverse culinary experiences we have from our worklife in the restaurant industry. We want to have fun and the best way to have fun is to make delicious food for others.
We hope you will enjoy it!

          </h5>
        </div>
        <div class="ap-s2-heading">
          <h2>how it started</h2>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
