import React from "react";
import "./section-five-six.css";
import mountain from "../../../media/mountain.jpg";

function SectionFiveAndSix() {
  return (
    <div class="mp-s5-s6-wrapper">
      <div class="mp-s5-relative">
        <div class="mp-s6-heading-small">
          <h2 class="h2-small">Drinks</h2>
        </div>
        <img src={mountain} alt="mountain"></img>
        <div class="mp-s5-menu">
          <h3>All can be made alcohol free</h3>
          <div class="mp-s5-menu-text-wrapper-border">
            <div class="mp-s5-menu-text-wrapper">
              <h2 class="mp-s5-menu-heading">cocktails</h2>
              <div class="mp-s5-menu-text">
                <div class="mp-s5-menu-text-col1">
                  <h3>Fukushima Lightning</h3>
                  <h5>Yuzusake, Cava, Yuzu salt</h5>
                  <h4>115kr</h4>

                  <h3>Pink Bloody Pink</h3>
                  <h5>
                    Stockholms Bränneri Pink Gin, Blood Orange Umeshu, Pink
                    Grapefruit
                  </h5>
                  <h4>125kr</h4>
                  <h3>Japaloma</h3>
                  <h5>Tequila, Yuzusake, Pink Grapefruit, Yuzu salt, Soda</h5>
                  <h4>145kr</h4>
                </div>
                <div class="mp-s5-menu-text-col2">
                  <h3>Gin Toniku</h3>
                  <h5>Gin, Yuzu, Organics Tonic Water</h5>
                  <h4>125kr</h4>
                  <h3>Cilantro Sour</h3>
                  <h5>Gin, Lime, Sugar, Soda</h5>
                  <h4>145kr</h4>
                  <h3>Shu-groni</h3>
                  <h5>Sake, Campari, Sweet vermouth</h5>
                  <h4>155kr</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mp-s6-relative">
        <img src={mountain} alt="mountain"></img>
        <div class="mp-s6-menu">
          <h3>Chinese liquor and more</h3>
          <div class="mp-s6-menu-text-wrapper-border">
            <div class="mp-s6-menu-text-wrapper">
              <h2 class="mp-s6-menu-heading">other drinks</h2>
              <div class="mp-s6-menu-text">
                <div class="mp-s6-menu-text-col1">
                <h3>Baijiu / cl</h3>

                  <h5>Red Star Classic 56%<br></br>
                  Peking - Light
                  aroma </h5>
                  <h4>25kr</h4>

                  <h5>Fenjiu 53%<br></br>
                  Fenyang, Shanxi province - Light aroma</h5>
                  <h4>28kr</h4>


                  <h5>Touqu 52%<br></br>
                  Luzhou, Sichuan province -Strong aroma</h5>
                  <h4>29kr</h4>


                  <h5>Wellbay 52%<br></br>
                  Chengdu, Sichuan province -Strong aroma</h5>
                  <h4>66kr</h4>


                  <h5>Fenjiu 53%<br></br>
                  Luzhou, Sichuan province -Strong aroma</h5>
                  <h4>28kr</h4>
                  
                </div>
                <div class="mp-s6-menu-text-col2">
                  
                  

                  <h3>Shaoxing rice wine / 5cl</h3>
                  <h5>Kuaijishan - 5 years, 14%</h5>
                  <h4>75kr</h4>
                  <h5>Kuaijishan - 8 years, 14%</h5>
                  <h4>95kr</h4>
                  <h5>Kuaijishan - 12 years, 14%
            </h5>
                  <h4>160kr</h4>
                    
                  <h3><br></br>Other drinks</h3>
                  <h4>Mineral Water 25kr<br></br> 
                  Light Beer 25kr<br></br> 
                  Coca-Cola Zero 25kr<br></br> 
                  Karma Cola 35kr<br></br> 
                  Gingerella 35kr</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFiveAndSix;
