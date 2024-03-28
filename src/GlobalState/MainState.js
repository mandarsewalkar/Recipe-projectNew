import React, { useState } from "react";
import MainContext from "./MainContext";

const MainState = (props) => {
  const [inputValue, setInputValue] = useState("Enter dish");
  const [history, setHistory] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [classStates, setClassStates] = useState([true, true, true]);

  return (
    <MainContext.Provider
      value={{
        inputValue,
        history,
        setInputValue,
        setHistory,
        isEditing,
        setIsEditing,
        user,
        setUser,
        classStates,
        setClassStates,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
