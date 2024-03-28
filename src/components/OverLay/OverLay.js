import React from "react";
import Filter1 from "../Filter/Filter";
import "./OverLay.css"; // Import CSS directly within the component file

export default function OverLay({ fun, overLay, fun2 }) {
  return (
    <div className={`overlay ${overLay ? "overlay-active" : ""}`}>
      <div
        className={`overlay-content ${overLay ? "overlay-content-active" : ""}`}
      >
        <div className="pad20 h-alignBet">
          <div>
            <Filter1 fun2={fun2} />
          </div>
          <div onClick={fun}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
