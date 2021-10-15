import React from "react";
import { useDispatch } from "react-redux";

import ada from "../assets/images/ada.png";
import ImageModal from "../components/ImageModal";
import { showModal } from "../store/actions/imageModal";

import "../assets/css/Profile.css";

export default function Profile() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showModal());
  };
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__image">
          <img onClick={() => handleClick()} src={ada} alt="Profile__Image" />
        </div>
        <div className="profile__content">
          <div className="profile__contentSection1">
            <div className="profile__name">
              <h1 className="profile__firstName">Dogunro</h1>
              <h1 className="profile__lastName">Tobi</h1>
            </div>
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
          <div className="profile__contentSection4">
            <div className="profile__contentSection4Text"></div>
            <div className="profile__contentSection4Links"></div>
          </div>
        </div>
      </div>
      <ImageModal />
    </div>
  );
}
