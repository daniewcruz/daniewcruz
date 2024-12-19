import React from "react";
import "./Cube3D.css";

const Cube3D = () => {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="cube-face front"></div>
        <div className="cube-face back"></div>
        <div className="cube-face left"></div>
        <div className="cube-face right"></div>
        <div className="cube-face top"></div>
        <div className="cube-face bottom"></div>
      </div>
    </div>
  );
};

export default Cube3D;
