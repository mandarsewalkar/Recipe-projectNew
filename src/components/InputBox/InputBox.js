import React, { useContext, useState, useEffect } from "react";
import MainContext from "../../GlobalState/MainContext";
import style from "./InputBoxStyle";

export default function InputBox() {
  const { inputValue, isEditing } = useContext(MainContext);
  const [text, setText] = useState("");

  useEffect(() => {
    // Update text only when isEditing becomes false
    if (!isEditing) {
      setText(inputValue);
    }
  }, [inputValue, isEditing]);

  // Clear text if inputValue is "Enter dish"
  useEffect(() => {
    if (inputValue === "Enter dish") {
      setText("");
    }
  }, [inputValue]);

  return <div style={style.inputBox}>{text}</div>;
}
