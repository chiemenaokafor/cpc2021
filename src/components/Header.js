import React from "react";
import { RiSearchLine } from "react-icons/ri";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <h1>COE</h1>
        </div>
        <div className="header__middle">
          <h1>THE 16TH SET</h1>
        </div>
        <div className="header__right">
          <RiSearchLine className="header__icon" />
        </div>
      </div>
    </div>
  );
}
