import React from "react";
import "./Background.css";
import Fade from "react-reveal/Fade";
import { BiMouse } from "react-icons/bi";
import { Link } from "react-scroll";

export default function Background() {
  return (
    <div className="background ">
      <div className="background__wrapper">
        <div className="background__text">
          <Fade right cascade>
            <p className="background__head">THE 16th SET</p>
          </Fade>
          <Fade right cascade>
            <h1 className="background__header">College of Engineering</h1>
          </Fade>
        </div>
        <div smooth className="background__btn">
          <Link
            to="cards"
            style={{ cursor: "pointer" }}
            to="cards"
            smooth={true}
            duration={500}
            spy={true}
          >
            <BiMouse className="background__icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
