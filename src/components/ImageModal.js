import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./ImageModal.css";
import ada from "../assets/images/ada.png";
import { ImCross } from "react-icons/im";
import { hideModal } from "../store/actions/imageModal";
import { useDispatch } from "react-redux";

export default function ImageModal({ imageSource }) {
  const modalState = useSelector((store) => store.imageModal);
  const dispatch = useDispatch();
  const modalRef = useRef();

  const handleClick = (e) => {
    if (e.target === modalRef.current) {
      dispatch(hideModal());
    }
  };
  return (
    <div
      style={{
        display: modalState ? "block" : "none",
      }}
      className="imageModal"
    >
      <div
        ref={modalRef}
        onClick={(e) => handleClick(e)}
        className="imageModal__wrapper"
      >
        <div className="imageModal__cancel">
          <ImCross
            onClick={() => dispatch(hideModal())}
            className="imageModal__icon"
          />
        </div>
        <img src={ada} className="imageModal__image" />
      </div>
    </div>
  );
}
