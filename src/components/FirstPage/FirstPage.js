import React, { useState, useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import But from "../But/But";
import Main from "../Main/Main";
import MainContext from "../../GlobalState/MainContext";
import Menu from "../Menu/Menu";
import OverLay from "../OverLay/OverLay";
import OverLaySq from "../OverLaySq.js/OverLaySq";
import Profile from "../Profile/Profile";
import style from "./FirstPageStyle";

export default function FirstPage({ fun, fun2, fun3 }) {
  const {
    inputValue,
    setInputValue,
    setHistory,
    history,
    isEditing,
    setIsEditing,
  } = useContext(MainContext);

  const [overLay, setOverLay] = useState(false);
  const [overLaySq, setOverLaySq] = useState(false);

  const [input, setInput] = useState("hello");

  let text = ["Random", "Sign In", "next", "Sign Up", "Ingredients"];

  function toggleOverLay(type) {
    if (type === "menu") {
      setOverLay(!overLay);
    } else if (type === "signIn") {
      setOverLaySq(!overLaySq);
    }
  }

  function x() {
    let num = Math.floor(Math.random() * 10);
    console.log(num);
  }

  function showHistory() {
    console.log(history.reverse());
  }

  function handleClick() {
    setIsEditing(!isEditing);
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
      <div style={style.page}>
        <div style={style.header}>
          <div
            style={style.border}
            className="v-align"
            onClick={() => toggleOverLay("menu")}
          >
            <Menu />
          </div>
          {overLay && (
            <OverLay
              fun={() => toggleOverLay("menu")}
              fun2={showHistory}
              fun3={fun3}
            />
          )}
          <SearchBar
            inputValue={inputValue}
            handleChange={handleChange}
            handleClick={handleClick}
            isEditing={isEditing}
          />
          <But text={text[0]} className="colorY" fun={x} />
          <But
            text={text[1]}
            className="colorY"
            fun={() => toggleOverLay("signIn")}
          />
          {overLaySq && (
            <OverLaySq
              fun={() => toggleOverLay("signIn")}
              text={text[3]}
              fun3={fun3}
            />
          )}
          <Profile />
        </div>
        <div style={style.Main}>
          <Main input={input} />
        </div>

        <div className="h-alignEven" style={style.next}>
          <But text={text[2]} className="colorY" fun={fun2} />
          <But text={text[4]} className="colorY" fun={fun} />
        </div>
      </div>
    </>
  );
}
