import React from "react";
import "./home-page.css";
import Header from "../header/header.js";
import mountain from "../../media/mountain.jpg";

function HomePage() {
  return (
    <div class="homepage-wrapper">
      <div class="s1-background">
        <Header />
        <div class="s1-wrapper">
          <img src={mountain} alt="mountain"></img>
          <div class="s1-text-wrapper">
            <h1>welcome</h1>
            <h1>
              <span>to </span>
              <span>miri</span>
            </h1>
            <h4>asian fusion restaurant<hr></hr></h4>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
