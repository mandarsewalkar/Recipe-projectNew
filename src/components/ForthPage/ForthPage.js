import "./ForthPage.module.css";
import But from "../But/But";
import style from "./style";
// import style from "../IngredientsPage/style";

function ForthPage({ fun, fun2, recipe }) {
  // const randomIndex = Math.floor(Math.random() * recipes.length);
  // const recipe = recipes[randomIndex];
  return (
    <div className="inherit , v-align">
      <div className="LeftBar"> </div>

      <div className="Recipe-div">
        <div className="RecipeHead">
          <h1 style={style.heading}>Recipe</h1>
        </div>

        <div className="GuidanceBar">For Guidance you can watch</div>
        <div className="h-align">
          <div style={style.innerCard} className="h-align">
            <div className="inherit, h-align" style={style.list}>
              <ul className="inherit" style={style.ul}>
                {recipe.instructions.split(".").map((ingredient, i) => (
                  <li style={style.li} key={i}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-align">
        <But text="HOME PAGE" className="colorY" fun={fun} />
        <But text="INGREDIENTS" className="colorY" fun={fun2} />
      </div>

      <div className="RightBar"></div>
    </div>
  );
}

export default ForthPage;
