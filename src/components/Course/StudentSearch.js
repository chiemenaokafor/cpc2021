import React from "react";

// icons
import { ReactComponent as SearchIcon } from "../../assets/svg/course-search-icon.svg";

function StudentSearch() {
  return (
    <form
      action=""
      className="md:self-end flex w-full md:w-1/4 justify-center item border-b-2 border-white pb-6"
    >
      <button type="submit" className="mr-12">
        <SearchIcon className="w-10 h-10" />
      </button>
      <input
        type="text"
        className="w-full h-14 outline-none bg-transparent text-4xl"
        placeholder="Find Student"
      />
    </form>
  );
}

export default StudentSearch;
