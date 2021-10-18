import React from "react";

// components
import HeroSection from "../components/Course/HeroSection";
import Gallery from "../components/Course/Gallery.js";

function Course() {
  return (
    <div
      className="Course__container text-white"
      style={{ fontFamily: "Poppins", backgroundColor: "#333333" }}
    >
      <HeroSection
        courseName="Information and Communication"
        departmentCode="COE"
        department="Engineering"
      />

      <Gallery />
    </div>
  );
}

export default Course;
