import React from "react";
import "./SecondPage.css";
import But from "../But/But";
import Main from "../Main/Main";
import style from "../FirstPage/FirstPageStyle";

function SecondPage({ fun, fun2 }) {
  let text = ["Veg", "Egg", "nonveg", "home", "Ingredients"];

  const handleButtonClick = (buttonText) => {
    console.log(buttonText);
  };

  return (
    <div className="v2-align">
      <div className="h-align" style={style.header}>
        <But
          className={text[0]}
          text={text[0]}
          fun={() => handleButtonClick(text[0])}
        />
        <But
          className={text[1]}
          text={text[1]}
          fun={() => handleButtonClick(text[1])}
        />
        <But
          className={text[2]}
          text={text[2]}
          fun={() => handleButtonClick(text[2])}
        />
      </div>
      <div>
        <Main />
      </div>
      <div className="h-alignEven" style={style.next}>
        <But text={text[3]} className="colorY" fun={fun} />
        <But text={text[4]} className="colorY" fun={fun2} />
      </div>
    </div>
  );
}

export default SecondPage;
