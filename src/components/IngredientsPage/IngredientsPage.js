import But from "../But/But";
import style from "./style";

export default function IngredientsPage({ fun, recipe, fun2 }) {
  // const randomIndex = Math.floor(Math.random() * recipes.length);
  // const recipe = recipes[randomIndex];

  // console.log(recipes);

  return (
    <div className="v-align , inherit">
      <div className="center" style={style.col}>
        <div className="v-alignEven">
          <But text="HOME PAGE" className="colorR" fun={fun} />
          <But text="BUY" className="colorG" fun={fun2} />
        </div>

        {recipe && (
          <div style={style.card}>
            <div
              className="center
            "
            >
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
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* <h3>Instructions:</h3>
            <div className="h-align">
              <div>
                <ul>
                  {recipe.instructions
                    .split(".")
                    .map(
                      (instruction, i) =>
                        instruction.trim() !== "" && (
                          <li key={i}>{instruction.trim()}</li>
                        )
                    )}
                </ul>
              </div>
            </div> */}
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
