import { useContext } from "react";
import React from "react";
import "./InputBox.css";
import MainContext from "../../GlobalState/MainContext";

export default function InputBox({}) {
  const { inputValue, isEditing } = useContext(MainContext);
  let text = "";
  if (isEditing === false) {
    text = inputValue;
  } else if (inputValue === "Enter dish") {
    text = "";
  }

  return <div className="inputBox">{text}</div>;
}
