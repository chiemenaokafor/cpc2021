import React from "react";

// components
import StudentSearch from "./StudentSearch.js";
import StudentCard from "./StudentCard.js";

function Gallery() {
  return (
    <div
      className="Gallery__container p-28 flex flex-col w-full"
      style={{ zIndex: 3, minHeight: "10rem" }}
    >
      <StudentSearch />
      <div className="Gallery__studentContainer grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-20">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
    </div>
  );
}

export default Gallery;
