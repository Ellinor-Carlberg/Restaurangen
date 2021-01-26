import React from "react";
import "./section-three.css";
import { ReactComponent as Email } from "../../../media/svg/009-email.svg";

function SectionThree() {
  return (
    <div class="ap-s3-relative">
      <div class="ap-s3-text">
        <div class="ap-s3-text-heading">
          <h2>Work <br></br>with us</h2>
        </div>
        <div class="ap-s3-text-body">
          <h3>
            and have fun!
          </h3>
          <hr></hr>
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
