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

export default function FirstPage({ fun, fun2, fun3, fun4 }) {
  const {
    inputValue,
    setInputValue,
    setHistory,
    history,
    isEditing,
    setIsEditing,
    SessionId,
    setSessionId,
  } = useContext(MainContext);

  const [overLay, setOverLay] = useState(false);
  const [overLaySq, setOverLaySq] = useState(false);

  const [input, setInput] = useState("hello");
  const [Rand, setRand] = useState(null);

  let text = [
    "Random",
    "Sign In",
    "next",
    "Sign Up",
    "Ingredients",
    "Log out",
    "Instructions",
  ];

  function toggleOverLay(type) {
    if (type === "menu") {
      setOverLay(!overLay);
    } else if (type === "signIn") {
      setOverLaySq(!overLaySq);
    }
  }

  function x() {
    let num = Math.floor(Math.random() * 10);
    setRand(num);
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

  function clearID() {
    setSessionId(null);
  }

  const backgroundColor = [
    "#ad4dbe",
    "#7e27a5",
    // "#7c949f", //light
    "#4c5f6a",
    "#ed487e",
    "#c42360",
    "#6170c2",
    "#158cd3",
    "#0f5c9f",
    "#199ba9",
    "#158c7e",
    "#0d5246",
    "#6ca240",
    "#3a6e26",
    "#f07114",
    "#907368",
    "#825cc4",
    "#5734aa",
    "#f65727",
    "#c13d19",
  ];

  const color1 = backgroundColor[3 - 1];

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
          {!SessionId && (
            <But
              text={text[1]}
              className="colorY"
              fun={() => toggleOverLay("signIn")}
            />
          )}
          {SessionId && (
            <But text={text[5]} className="colorY" fun={() => clearID(null)} />
          )}
          {overLaySq && (
            <OverLaySq
              fun={() => toggleOverLay("signIn")}
              text={text[3]}
              fun3={fun3}
            />
          )}
          <Profile color1={color1} />
        </div>
        <div style={style.Main}>
          {Rand === null && <Main input={input} />}
          {Rand != null && <Main input={Rand} />}
        </div>

        <div className="h-alignEven" style={style.next}>
          {SessionId && <But text={text[2]} className="colorY" fun={fun2} />}
          {!SessionId && (
            <But
              text={text[2]}
              className="colorY"
              fun={() => toggleOverLay("signIn")}
            />
          )}
          {SessionId && <But text={text[4]} className="colorY" fun={fun} />}
          {!SessionId && (
            <But
              text={text[4]}
              className="colorY"
              fun={() => toggleOverLay("signIn")}
            />
          )}
          {SessionId && <But text={text[6]} className="colorY" fun={fun4} />}
          {!SessionId && (
            <But
              text={text[6]}
              className="colorY"
              fun={() => toggleOverLay("signIn")}
            />
          )}
        </div>
      </div>
    </>
  );
}
