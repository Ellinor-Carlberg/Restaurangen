import React from "react";
import "./section-five-six.css";
import mountain from "../../../media/images/chairs.jpg";
import mountain1 from "../../../media/images/dumplings8.jpg";

function SectionFiveAndSix() {
  return (
    <div class="hp-s5-s6-background">
      <div class="hp-s5-relative">
        <img src={mountain1} alt="mountain"></img>
        <h2 class="hp-s5-text-heading">MENU</h2>
        <div class="hp-s5-text-body">
          <h3>
            But what about the food and drinks?<hr></hr>
          </h3>
          <h5>
            There is kimchi, dumplings, buns, ramen, sweet desserts and all kind
            of yummy things! Our own unique Cocktails and other liquids to
            quench your thirst.
          </h5>
          <button>Check our menu</button>
        </div>
      </div>
      <div class="hp-s6-relative">
        <img src={mountain} alt="mountain"></img>
        <h2 class="hp-s6-text-heading">LATEST NEWS</h2>

        <div class="hp-s6-text-body">
          <h3>
            there is always something happening at miri<hr></hr>
          </h3>
          <h5>
            We are a joyfull and living restaurant and always up for something
            fun! Check out our news page for information about events at the
            restaurant and the latest uppdates.
          </h5>
          <button>I want to know</button>
        </div>
      </div>
    </div>
  );
}

export default SectionFiveAndSix;



      /*     <h3 class="h3-latest-post">
            latest post<hr></hr>
          </h3>
          <h4>Here should be the headline for the latest post</h4>
          <h5>
            Here should be the intro text for the latest post. Here should be
            the intro text for the latest post. Here should be the intro text
            for the latest post. Here should be the intro text for the latest
            post.
          </h5>
          <button>Read more...</button> */