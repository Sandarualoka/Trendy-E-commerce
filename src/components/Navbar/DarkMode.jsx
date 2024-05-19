import React from "react";
import LightBtn from "../../assets/LightBtn.png";
import DarkBtn from "../../assets/DarkBtn.png";

const DarkMode = () => {
  return (
    <div className="relative">
      <img
        src={LightBtn}
        className="w-12 transition-all duration-300 absolute right-0 z-10"
        alt="light mode"
      />

      <img
        src={DarkBtn}
        className="w-12 transition-all duration-300"
        alt="dark mode"
      />
    </div>
  );
};

export default DarkMode;
