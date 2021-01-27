import React from "react";
import "./section-two-three.css";
import mountain2 from "../../../media/images/grey.jpg";
import mountain from "../../../media/images/whiteGarlic.jpg";

function SectionTwoAndThree() {
  return (
    <div class="mp-s2-s3-wrapper">
      <div class="mp-s2-relative">
        <img src={mountain} alt="garlic"></img>
        <div class="mp-s2-heading-small">
          <h2 class="h2-small">Food</h2>
        </div>
        <div class="mp-s2-menu">
          <h3>Pick many and share</h3>

          <div class="mp-s2-menu-text-wrapper">
            <h2 class="mp-s2-menu-heading">small dishes</h2>
            <div class="mp-s2-menu-text">
              <div class="mp-s2-menu-text-col1">
                <h3>SMASHED CUCUMBER SALAD</h3>
                <h5>With sesame lime dressing and chili oil</h5>
                <h4>85kr</h4>
                <h3>TUNA TARTARE</h3>
                <h5>With mango, cucumber, ponzu and roasted chili mayo</h5>
                <h4>125kr</h4>
                <h3>FRÖYA SALMON</h3>
                <h5>
                  Marinated salmon sashimi with pickled green chili mayo,
                  daikonand fried rice paper
                </h5>
                <h4>145kr</h4>

                <h3>MISO GLAZED CAULIFLOWER STEAK</h3>
                <h5>
                  Miso seared cauliflower with beetroot salad and yuzu dressing
                </h5>
                <h4>135kr</h4>

                <h3>CHILI CHUCK WONTONS</h3>
                <h5>
                  With radish, chili salt, roasted chili ponzu and roasted chili
                  mayo
                </h5>
                <h4>115kr</h4>
              </div>
              <div class="mp-s2-menu-text-col2">
                <h3>FRIED MAPO TOFU DUMPLINGSE</h3>
                <h5>With ginger crème, fresh mint and coriander</h5>
                <h4>115kr</h4>
                <h3>STEAMED PORK & KIMCHI DUMPLINGS</h3>
                <h5>With dubu jjigae sauce, black beans and crushed cashews</h5>
                <h4>105kr</h4>

                <h3>BBQ PORK BUN</h3>
                <h5>With roasted chili mayo, kimchi and chopped peanuts</h5>
                <h4>80kr</h4>

                <h3>KUNG PAO TOFU BUN</h3>
                <h5>
                  With Kung Pao glaze, cucumber, bean sprouts and orange mayo
                </h5>
                <h4>85kr</h4>

                <h3>
                  <br></br>Sides
                </h3>
                <h4>
                  Kimchi 40kr<br></br> Organic edamame 45kr<br></br> Rice 20kr
                  <br></br> Chili Rice with roasted peanuts 45kr<br></br>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mp-s3-relative">
        <img src={mountain2} alt="eggs"></img>
        <div class="mp-s3-menu">
          <h3>Japanese noodle soup</h3>

          <div class="mp-s3-menu-text-wrapper">
            <h2 class="mp-s3-menu-heading">ramen</h2>
            <div class="mp-s3-menu-text">
              <div class="mp-s3-menu-text-col1">
                <h3>Tokyo Ramen -Shoyo</h3>
                <h5>
                  Chicken and pork broth, seafood dashi, chashu pork, fermented
                  bamboo shoots and spring onion
                </h5>
                <h4>135kr</h4>

                <h3>Niboshi Ramen -Shoyo</h3>
                <h5>
                  Chicken, pork and niboshi (dried sardines) broth, seafood
                  dashi, chashu pork, fermented bamboo shoots and white onion
                </h5>
                <h4>145kr</h4>

                <h3>Spicy Ramen -Miso</h3>
                <h5>
                  Chicken broth, seafood dashi, chashu pork, sesame, miso,
                  chilli, spring onion, lotus root and pickled ginger
                </h5>
                <h4>155kr</h4>
              </div>
              <div class="mp-s3-menu-text-col2">
                <h3>Vegan Spicy Ramen -Miso</h3>
                <h5>
                  Vegetable broth, mushroom dashi, marinated tofu, sesame, miso,
                  chilli, spring onion, lotus root and pickled ginger
                </h5>
                <h4>145kr</h4>

                <h3>
                  <br></br>Extras
                </h3>
                <h4>
                  Marinated Egg 20kr<br></br>
                  64 Degree Egg 25kr<br></br> Extra Noodles 35kr <br></br>
                  Extra Pork/tofu 40kr
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwoAndThree;
