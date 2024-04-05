import React, { useState, useContext } from "react";
import style from "../Filter/style";
import MainContext from "../../GlobalState/MainContext";

export default function Category() {
  const [clicked, setClicked] = useState(false);

  const { classStates, setClassStates } = useContext(MainContext);

  const text = ["Gluten free", "Suger free", "Vegan"];

  function handleClick(index) {
    const newClassStates = [...classStates];
    newClassStates[index] = !newClassStates[index];
    setClassStates(newClassStates);
    console.log(classStates);
  }

  return (
    <>
      <div
        style={style.pointer}
        className="h-align"
        onClick={() => setClicked(!clicked)}
      >
        Category
      </div>
      {clicked &&
        text.map((category, index) => (
          <div
            key={index}
            style={classStates[index] ? style.red : style.green}
            className="center"
            onClick={() => handleClick(index)}
          >
            {category}
          </div>
        ))}
    </>
  );
}
