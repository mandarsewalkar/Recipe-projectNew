import React, { useState } from "react";
import MainContext from "./MainContext";

const MainState = (props) => {
  const [inputValue, setInputValue] = useState("Enter dish");
  const [history, setHistory] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [classStates, setClassStates] = useState([true, true, true]);
  const [SessionId, setSessionId] = useState(null);
  const [Sym, setSym] = useState(null);
  const [ProColor, setProColor] = useState(null);

  return (
    <MainContext.Provider
      value={{
        inputValue,
        setInputValue,
        history,
        setHistory,
        isEditing,
        setIsEditing,
        user,
        setUser,
        classStates,
        setClassStates,
        SessionId,
        setSessionId,
        Sym,
        setSym,
        ProColor,
        setProColor,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
