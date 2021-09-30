import React, { useState, useEffect } from "react";

// images
import coursepictemp from "../../assets/images/coursepictemp.png";

// svg
import { ReactComponent as SearchIcon } from "../../assets/svg/course-search-icon.svg";

// components
import CourseSearch from "./CourseSearch.js";

const styles = {
  departmentCode: {
    fontWeight: "700",
    fontSize: "56px",
  },
  text: {
    fontWeight: "700",
    fontSize: "32px",
  },
  settext: {
    fontWeight: "700",
    fontSize: "32px",
    cursor: "pointer",
  },
  background: (image = coursepictemp) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url("${image}")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }),
};

function HeroSection({ departmentCode, courseName, department, image }) {
  const [startTransition, setstartTransition] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [course, setCourse] = useState("");

  useEffect(() => {
    setstartTransition(true);
  }, []);

  const showInputHandler = () => {
    setShowInput(!showInput);
  };

  return (
    <div
      className="HeroSection__container h-screen px-10 md:px-16 flex flex-col justify-between pb-56 relative overflow-x-hidden"
      style={styles.background()}
    >
      <nav className="HeroSection__navbar w-full pt-11">
        <ul className="flex flex-row justify-end md:justify-between items-center">
          <li
            className="HeroSection__department-code animate-pulse md:block hidden"
            style={styles.departmentCode}
          >
            <h1>{departmentCode}</h1>
          </li>
          <li className="md:block hidden">
            <h1 style={styles.settext}>THE 16TH SET</h1>
          </li>
          <li
            className="HeroSection__search "
            style={styles.text}
            onClick={showInputHandler}
          >
            <SearchIcon
              className={`h-20 w-20 ${showInput ? "invisible" : ""}`}
              style={{ cursor: "pointer" }}
            />
          </li>
        </ul>
      </nav>

      <section
        className={`HeroSection__course-detail text-right transform ${
          startTransition ? "translate-x-0" : "translate-x-full"
        } transition duration-1000 ease-linear`}
      >
        <h1
          className="HeroSection__course-name text-8xl"
          style={{ color: "#FAFAFA" }}
        >
          {courseName}
        </h1>
        <p
          className="HeroSection__department text-4xl font-thin mt-10"
          style={{ color: "#FAFAFA" }}
        >
          {department}
        </p>
      </section>

      <CourseSearch
        course={course}
        setCourse={setCourse}
        showInput={showInput}
        showInputHandler={showInputHandler}
      />
    </div>
  );
}

export default HeroSection;
