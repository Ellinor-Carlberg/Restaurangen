import React from "react";
import "./section-four.css";

function SectionFour() {
  return (
    <div class="hp-s4-relative">
      <div class="hp-s4-text">
        <div class="hp-s4-text-heading">
          <h2>book a table</h2>
        </div>
        <h3>
          There is two ways<hr></hr>
        </h3>
        <div class="hp-s4-text-body">
          <div>
            <button>
              <a href="https://www.thefork.se/" target="_blank" rel="noreferrer">
                Book table
              </a>
            </button>
            <h5>
              Make your dinner reservation online by clicking the button above.
              If you are more then 8 people, then:
            </h5>
          </div>
          <div>
            <h5>
              give us a call. If you call outside business hours, leave a
              message and someone will get back to you as soon as possible. Call
              us on:
            </h5>
            <h4 class="h4-border">+467 19 43 670</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
