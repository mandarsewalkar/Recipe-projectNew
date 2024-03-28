import Category from "../Category/Category";
import style from "./style";

function Filter1({ fun2 }) {
  return (
    <>
      <input
        type="text"
        id="filterInput"
        placeholder="Search for a category..."
      ></input>

      <table id="myTable">
        <thead>
          <tr>
            <td>
              <Category />
            </td>
          </tr>
        </thead>
        <tbody className="inherit">
          <tr className="inherit">
            <td onClick={fun2} style={style.pointer}>
              History
            </td>
          </tr>
          <tr>
            <td style={style.pointer}>Account</td>
          </tr>
          <tr>
            <td style={style.pointer}>Recipes</td>
          </tr>
          <tr>
            <td style={style.pointer}>Ingredients</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Filter1;
