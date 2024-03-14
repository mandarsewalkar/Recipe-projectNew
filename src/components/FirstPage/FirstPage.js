import React, { useContext, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import But from "../But/But";
import Main from "../Main/Main";
import "./FirstPage.css";
import MainContext from "../../GlobalState/MainContext";

export default function FirstPage() {
  const {
    inputValue,
    setInputValue,
    setHistory,
    history,
    isEditing,
    setIsEditing,
  } = useContext(MainContext);

  const [input, setInput] = useState("hello");

  let text = ["Random", "History"];

  function x() {
    let num = Math.floor(Math.random() * 10);
    console.log(num);
  }

  function showHistory() {
    console.log(history.reverse());
  }

  function handleClick() {
    setIsEditing(!isEditing);
    console.log(inputValue);
    let same = false;
    if (!history.includes(inputValue) && inputValue !== "Enter dish") {
      setHistory([...history, inputValue]);
    }
    setInput(inputValue);
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div className="page">
        <div className="header">
          <SearchBar
            inputValue={inputValue}
            handleChange={handleChange}
            handleClick={handleClick}
            isEditing={isEditing}
          />
          <But text={text[0]} fun={x} />
          <But text={text[1]} fun={showHistory} />
        </div>
        <div className="main">
          <Main input={input} />
        </div>
      </div>
    </>
  );
}
