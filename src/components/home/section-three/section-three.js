import React from "react";
import "./section-three.css";
import { ReactComponent as Facebook } from "../../../media/svg/001-facebook.svg";
import { ReactComponent as Instagram } from "../../../media/svg/002-instagram.svg";
import { ReactComponent as TikTok } from "../../../media/svg/004-tiktok.svg";
import { ReactComponent as Email } from "../../../media/svg/009-email.svg";
import mountain from "../../../media/mountain.jpg";

function SectionThree() {
  return (
    <div class="hp-s3-relative">
      <img src={mountain} alt="mountain"></img>
      <div class="hp-s3-text-heading">
        <h2>visit us</h2>
      </div>
      <div class="hp-s3-text-body">
        <h3>
          Please drop by<hr></hr>
        </h3>
        <h4>location</h4>
        <h5>
          Restaurant Miri<br></br>
          Sankt Eriksgatan 70<br></br>
          113 20 Stockholm<br></br>
        </h5>
        <h6>Click on the map to get directions</h6>

        <h4>OPENING HOURS</h4>
        <h5>
          Monday - Sunday<br></br>
          11:30 - 22:00
        </h5>

        <h4>GET IN TOUCH</h4>
        <h5>
          Just drop by, or if you want to book a table se information below.
          <br></br>
          If there is something else you want to contat us about you can always
          call us on +467 19 43 670. <br></br>Or send us an email </h5>
          <div class="h5-email"><Email class="icon email" />
          <h5>contact@miri.com</h5>
        </div>
        <h4>social media</h4>
        <h5>Check us out and follow!</h5>

        <Facebook class="icon" />
        <Instagram class="icon" />
        <TikTok class="icon" />
      </div>
    </div>
  );
}

export default SectionThree;
