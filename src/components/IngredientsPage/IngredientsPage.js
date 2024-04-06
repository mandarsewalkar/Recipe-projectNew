import React, { useState } from "react";
import But from "../But/But";
import style from "./style";

export default function IngredientsPage({ fun, recipe, fun2 }) {
  const [Buy, setBuy] = useState(false);
  const [checkedBoxes, setCheckedBoxes] = useState(
    Array(recipe.ingredients.split("|").length).fill(false)
  );

  const toggleCheckboxTrue = (index) => {
    const newCheckedBoxes = [...checkedBoxes];
    newCheckedBoxes[index] = true;
    setCheckedBoxes(newCheckedBoxes);
  };

  const toggleCheckbox = (index) => {
    const newCheckedBoxes = [...checkedBoxes];
    newCheckedBoxes[index] = !newCheckedBoxes[index];
    setCheckedBoxes(newCheckedBoxes);
  };

  const handleBuyClick = () => {
    setBuy(!Buy);
  };

  const handleCheckboxClick = (index) => {
    toggleCheckbox(index);
  };

  return (
    <div className="v-align , inherit">
      <div className="center" style={style.col}>
        <div className="v-alignEven">
          <But text="HOME PAGE" className="colorR" fun={fun} />
          <But text="BUY" className="colorG" fun={handleBuyClick} />
        </div>

        {recipe && (
          <div style={style.card}>
            <div className="center">
              <h2 className="center" style={style.title}>
                {recipe.title}
              </h2>
            </div>
            <h3 style={style.heading}>Ingredients:</h3>
            <div className="h-align">
              <div style={style.innerCard} className="h-align">
                <div className="inherit" style={style.list}>
                  <ul className="inherit" style={style.ul}>
                    {recipe.ingredients.split("|").map((ingredient, i) => (
                      <li style={style.li} key={i}>
                        <div>{ingredient}</div>
                        {Buy && (
                          <div style={style.buy} className="h-alignBet">
                            <a
                              style={style.a}
                              target="_blank"
                              href={`https://www.amazon.in/s?k=${ingredient}&crid=1FJFB3O5FM3S7&sprefix=rice%2Caps%2C1476&ref=nb_sb_noss_1`}
                              onClick={() => toggleCheckboxTrue(i)}
                            >
                              Click here to BUY!
                            </a>
                            <div onClick={() => handleCheckboxClick(i)}>
                              <input
                                style={style.checkBox}
                                type="checkbox"
                                checked={checkedBoxes[i]}
                              />
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="h-align">
        <But text="HOME PAGE" className="colorY" fun={fun} />
        <But text="INSTRUCTIONS" className="colorY" fun={fun2} />
      </div>
    </div>
  );
}
