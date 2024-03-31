import React from "react";
import "./But.css";

function But({ text, className, fun, fun2 }) {
  return (
    <div className={`ran-but ${className}`} onClick={fun}>
      {text}
    </div>
  );
}

export default But;
