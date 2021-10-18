import React from "react";

// components
import StudentSearch from "./StudentSearch.js";
import StudentCard from "./StudentCard.js";

// react-reveal
import Bounce from "react-reveal/Bounce";

function Gallery() {
  return (
    <div
      className="Gallery__container p-28 flex flex-col w-full"
      style={{ zIndex: 3, minHeight: "10rem" }}
    >
      <StudentSearch />
      <div className="Gallery__studentContainer grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-32">
        <Bounce left>
          <StudentCard />
        </Bounce>
        <Bounce left>
          <StudentCard />
        </Bounce>
        <Bounce left>
          <StudentCard />
        </Bounce>
        <Bounce left>
          <StudentCard />
        </Bounce>
        <Bounce left>
          <StudentCard />
        </Bounce>
        <Bounce left>
          <StudentCard />
        </Bounce>
        <Bounce left>
          <StudentCard />
        </Bounce>
        <Bounce left>
          <StudentCard />
        </Bounce>
        <Bounce left>
          <StudentCard />
        </Bounce>
      </div>
    </div>
  );
}

export default Gallery;
