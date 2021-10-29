import React from "react";

// svg
import { ReactComponent as SearchIcon } from "../../assets/svg/course-search-icon.svg";
import { ReactComponent as CancelIcon } from "../../assets/svg/course-cancel-icon.svg";

const styles = {
  modalBackground: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

function Search({ showInput, showInputHandler, course, setCourse }) {
  return (
    <div
      className={`absolute top-0 left-0 h-full w-full flex justify-center items-start transform transition duration-200 ease-linear ${
        showInput ? "translate-x-0" : "translate-x-full"
      }`}
      style={styles.modalBackground}
    >
      <CancelIcon
        className="w-14 h-14 md:h-20 md:w-20 cursor-pointer absolute top-7 left-7"
        onClick={showInputHandler}
      />
      <form className="flex flex-row items-center mt-64 md:mt-96">
        <input
          className={`text-5xl pl-2 right-0 bg-transparent border-b-2 focus:shadow-lg border-white mr-7  md:text-7xl outline-none `}
          placeholder="Search for a course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">
          <SearchIcon
            className={`w-14 h-14 md:h-20 md:w-20`}
            style={{ cursor: "pointer" }}
          />
        </button>
      </form>
    </div>
  );
}

export default Search;
