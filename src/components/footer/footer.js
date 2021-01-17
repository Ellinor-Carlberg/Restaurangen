import React from "react";
import "./footer.css";
import { ReactComponent as Facebook } from "../../media/svg/001-facebook.svg";
import { ReactComponent as Instagram } from "../../media/svg/002-instagram.svg";
import { ReactComponent as TikTok } from "../../media/svg/004-tiktok.svg";
import mountain from "../../media/mountain.jpg";


function Footer() {
  return (
    <div class="footer">
      <div class="footer-relative">
        <img src={mountain} alt="mountain"></img>
        <h2>CONTACT</h2>
          <div class="footer-text">
          <h4>
          Sankt Eriksgatan 70, 113 20 Stockholm
          </h4>
          <h4>
          phone 040-121490
          </h4>
          <h4>
          OPENING HOURS: Monday - Sunday 11:30 - 22:00
          </h4>
        </div>
        <div class="footer-social">
          <Facebook class="icon" />
          <Instagram class="icon" />
          <TikTok class="icon" />
          <hr></hr>
          </div>
          <div class="footer-logo">LOGO</div>
      </div>
      
    </div>
  );
}

export default Footer;

/* 
import { ReactComponent as IconName } from "../path-icon.svg";
<IconName /> 


<hr></hr>
*/
