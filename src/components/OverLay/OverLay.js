import React from "react";
import Filter1 from "../Filter/Filter";
import "./OverLay.css"; // Import CSS directly within the component file
import Cross from "../Cancel/Cancel";

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
          <Cross fun={fun} />
        </div>
      </div>
    </div>
  );
}
