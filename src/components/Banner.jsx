import React from "react";
// import vector from "../assets/vector1.png";
const Banner = ({inProgressCount}) => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 justify-between gap-8 mt-16">
      <div
        className="rounded-lg p-16 text-center
      bg-linear-120 from-[#632EE3] to-[#9F62F2]"
      >
        <p className="font-light text-lg text-white mb-3">In-Progress</p>
        <h1 className="font-semibold text-4xl text-white">{inProgressCount}</h1>
      </div>
      <div
        className="rounded-lg p-16 text-center
      bg-linear-120 from-[#54CF68] to-[#00827A]"
      >
        <p className="font-light text-lg text-white mb-3">Resolved</p>
        <h1 className="font-semibold text-4xl text-white">0</h1>
      </div>
    </div>
  );
};

export default Banner;
