import React from "react";
import "./footer.css";
import mountain from "../../media/mountain.jpg";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-relative">
        <img src={mountain} alt="mountain"></img>
        <div class="footer-text">
          <h4>
            asian fusion restaurant<hr></hr>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
