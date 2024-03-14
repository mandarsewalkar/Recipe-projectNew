import React, { useState } from "react";
import MainContext from "./MainContext";

const MainState = (props) => {
  const [inputValue, setInputValue] = useState("Enter dish");
  const [history, setHistory] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <MainContext.Provider
      value={{
        inputValue,
        history,
        setInputValue,
        setHistory,
        isEditing,
        setIsEditing,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
