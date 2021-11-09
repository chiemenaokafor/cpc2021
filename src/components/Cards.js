import React from "react";
import Zoom from "react-reveal/Zoom";

import "../assets/css/Cards.css";

export default function Cards() {
  const cardList = [
    {
      h1: "Computer",
      p: "Engineering",
    },
    {
      h1: "Electrical",
      p: "Engineering",
    },
    {
      h1: "Mechanical",
      p: "Engineering",
    },
    {
      h1: "Civil",
      p: "Engineering",
    },
    {
      h1: "Information",
      p: "Engineering",
    },
    {
      h1: "Chemical",
      p: "Engineering",
    },
    {
      h1: "Petroleum",
      p: "Engineering",
    },
    {
      h1: "Computer",
      p: "Engineering",
    },
    {
      h1: "Computer",
      p: "Engineering",
    },
  ];
  return (
    <div id="cards" className="cards">
      <div className="cards__wrapper">
        <Zoom duration={500}>
          {cardList.map((item, key) => (
            <div key={key} className="cards__block">
              <div className="cards__text">
                <h1 className="cards__name">{item.h1}</h1>
                <div className="cards__name">{item.p}</div>
              </div>
            </div>
          ))}
        </Zoom>
      </div>
    </div>
  );
}
