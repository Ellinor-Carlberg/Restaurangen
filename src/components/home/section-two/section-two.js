import React from "react";
import "./section-two.css";
import mountain from "../../../media/images/hand.jpg";

function SectionTwo() {
  return (
    <div class="hp-s2-relative">
      <img src={mountain} alt="mountain"></img>
      <div class="hp-s2-text">
        <div class="hp-s2-text-body">
          <h3>
            "For the people, food is heaven"<hr></hr>
          </h3>
          <h5>
            This is as true in tropical chili-loving Sichuan as among the
            hunters on the snow-capped peaks of the Himalayas.<br></br> Likewise
            in the cumin-scented Muslim deserts on the Silk Road in Xinjiang. <br></br>
            So let the journey begin!<br></br><br></br>
            Miri serves you tasty, healthy dishes that are served quickly,
            freshly and simply in a warm and playful environment. The basis of
            our kitchen is our interpretation of street food from the asian
            cusine. We are open for all, days and nights. Come as you are.<br></br>
            
          </h5>
          <h3>Warm welcome!</h3>
        </div>
        <div class="hp-s2-heading">
          <h2>who <br></br>we are</h2>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
