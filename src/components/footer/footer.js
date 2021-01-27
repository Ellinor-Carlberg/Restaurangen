import React from "react";
import "./footer.css";
import { ReactComponent as Facebook } from "../../media/svg/001-facebook.svg";
import { ReactComponent as Instagram } from "../../media/svg/002-instagram.svg";
import { ReactComponent as TikTok } from "../../media/svg/004-tiktok.svg";
import { ReactComponent as Logo } from "../../media/svg/miri-logo.svg";
import { ReactComponent as Email } from "../../media/svg/009-email.svg";
import mountain from "../../media/images/pink11.jpg";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-relative">
        <img src={mountain} alt="mountain"></img>
        <h2>CONTACT</h2>
        <div class="footer-text">
          <h4>Sankt Eriksgatan 70, 113 20 Stockholm</h4>
          <h4 class="h4-padding">OPENING HOURS</h4>
          <h4> Monday - Sunday 11:30 - 22:00</h4>
          <h3>phone 040-121490</h3>
          <div class="h4-email">
            <a href="mailto:contact@miri.com">
              <Email class="icon email" />
            </a>
            <h4>contact@miri.com</h4>
          </div>
        </div>
        <div class="footer-social">
          <a href="https://www.facebook.com/" target="_blank "rel="noreferrer">
            <Facebook class="icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank"rel="noreferrer">
            <Instagram class="icon" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank"rel="noreferrer">
            <TikTok class="icon" />
          </a>
          <hr></hr>
          <div class="logo-wrapper">
            <div>
              <div class="row">
                <h4>restaurant miri</h4>
                <Logo class="logo" />
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer; /* 
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a> */

/* 
import { ReactComponent as IconName } from "../path-icon.svg";
<IconName /> 


<hr></hr>
*/
