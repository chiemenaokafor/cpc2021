import React from "react";
import ada from "../assets/images/ada.png";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__image">
          <img src={ada} alt="Profile Image" />
        </div>
        <div className="profile__content">
          <div className="profile__contentSection1">
            <h1 className="profile__name">Dogunro Tobi</h1>
            <button className="profile__btn">Sign Yearbook</button>
          </div>
          <div className="profile__contentSection2">
            <div className="profile__contentSection2Left">
              <h2 className="profile__contentSection2Header">PROGRAM</h2>
              <h1 className="profile__contentSection2Body">
                Information and Communication Engineering
              </h1>
            </div>
            <div className="profile__contentSection2Right">
              <h2 className="profile__contentSection2Header">DATE OF BIRTH</h2>
              <h1 className="profile__contentSection2Body">
                18th January, 2000
              </h1>
            </div>
          </div>
          <div className="profile__contentSection3">
            <p>
              I don’t know what other bit of information we want to add here but
              I was thinking if we aren’t using this space for much, we could
              add that view of the signature you did in your first design here
            </p>
          </div>
          <div className="profile__contentSection4"></div>
        </div>
      </div>
    </div>
  );
}
