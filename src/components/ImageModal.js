import React from "react";
import { useSelector } from "react-redux";
import "./ImageModal.css";

export default function ImageModal({ imageSource }) {
  const modalState = useSelector((store) => store.imageModal);
  return (
    <div
      style={{
        display: modalState ? "block" : "none",
      }}
      className="imageModal"
    >
      Modal
    </div>
  );
}
