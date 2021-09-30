import React from "react";
import "./Cards.css";
import Zoom from "react-reveal/Zoom";

export default function Cards() {
  return (
    <div id="cards" className="cards">
      <div className="cards__wrapper">
        <Zoom duration={500}>
          <div className="cards__block">
            <div className="cards__text">
              <h1 className="cards__name">Computer</h1>
              <div className="cards__name">Engineering</div>
            </div>
          </div>
          <div className="cards__block">
            <div className="cards__text">
              <h1 className="cards__name">Electrical</h1>
              <div className="cards__name">Engineering</div>
            </div>
          </div>
          <div className="cards__block">
            <div className="cards__text">
              <h1 className="cards__name">Mechanical</h1>
              <div className="cards__name">Engineering</div>
            </div>
          </div>
          <div className="cards__block">
            <div className="cards__text">
              <h1 className="cards__name">Civil</h1>
              <div className="cards__name">Engineering</div>
            </div>
          </div>
          <div className="cards__block">
            <div className="cards__text">
              <h1 className="cards__name">Petroleum</h1>
              <div className="cards__name">Engineering</div>
            </div>
          </div>
          <div className="cards__block">
            <div className="cards__text">
              <h1 className="cards__name">Chemical</h1>
              <div className="cards__name">Engineering</div>
            </div>
          </div>
          <div className="cards__block">
            <div className="cards__text">
              <h1 className="cards__name">Information</h1>
              <div className="cards__name">Engineering</div>
            </div>
          </div>
          <div className="cards__block">
            <div className="cards__text">
              <h1 className="cards__name">Computer</h1>
              <div className="cards__name">Engineering</div>
            </div>
          </div>
          <div className="cards__block">
            <div className="cards__text">
              <h1 className="cards__name">Computer</h1>
              <div className="cards__name">Engineering</div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
}
