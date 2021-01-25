import React from "react";
import "./section-three.css";
import { ReactComponent as Email } from "../../../media/svg/009-email.svg";
import mountain from "../../../media/mountain.jpg";

function SectionThree() {
  return (
    <div class="ap-s3-relative">
      <img src={mountain} alt="mountain"></img>
      <div class="ap-s3-text">
        <div class="ap-s3-text-heading">
          <h2>Work with us</h2>
        </div>
        <div class="ap-s3-text-body">
          <h3>
            and have fun!<hr></hr>
          </h3>
          <h5>
          We are continuously looking for dedicated and inspiring people to be part of our team. Send us a email</h5>
          <div class="h5-email"><a href="mailto:work@miri.com"><Email class="icon email" /></a>
          <h5>work@miri.com</h5> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
