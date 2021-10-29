import React from "react";

// picture
import picture from "../../assets/images/student-pic.png";

function StudentCard() {
  return (
    <div className="StudentCard__container col-span-1 text-white ">
      <div className="rounded-3xl transform hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden relative">
        <img
          className=" shadow-2xl "
          src={picture}
          alt=""
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div
          className=" opacity-0 text-right flex justify-end  items-end absolute top-0 left-0 w-full h-full hover:opacity-100 transition duration-500 ease-out"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6))",
            fontWeight: "900",
          }}
        >
          <h1 className=" text-4xl sm:text-5xl pr-8 pl-96 pb-14 leading-relaxed">
            View Tochukwu's Profile
          </h1>
        </div>
      </div>

      <div className=" flex flex-col items-start justify-end mt-8  ">
        <h1
          className="text-3xl tracking-widest"
          style={{ fontWeight: 900, letterSpacing: "0.18em" }}
        >
          Femi
        </h1>
        <h1
          className="mt-1 text-4xl "
          style={{ fontWeight: 400, letterSpacing: "0.18em" }}
        >
          Ikechukwu
        </h1>
      </div>
    </div>
  );
}

export default StudentCard;
