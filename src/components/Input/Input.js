import React from "react";
import style from "./style";

export default function Input(props) {
  const { value, onChange, id, type, htmlFor } = props;

  return (
    <div>
      <div>
        <label htmlFor={htmlFor}>{htmlFor}:</label>
      </div>
      <div>
        <input
          style={style.border}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}
