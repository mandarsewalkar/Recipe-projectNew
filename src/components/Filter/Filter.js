import Category from "../Category/Category";
import style from "./style";
import Cross from "../Cancel/Cancel";
import Profile from "../Profile/Profile";
import { useContext } from "react";
import MainContext from "../../GlobalState/MainContext";

function Filter1({ fun2, fun }) {
  const { user, SessionId } = useContext(MainContext);

  return (
    <>
      <div className="h-alignBet">
        {user && SessionId && (
          <div style={style.user}>
            <div className="v-align" style={style.profile}>
              <div className="h-alignBet , gap">
                <div>
                  <Profile />
                </div>
                <div className="flexFit , v-align ">
                  <h3>{user}</h3>
                </div>
              </div>
            </div>
          </div>
        )}
        {SessionId === null && <div></div>}
        <Cross fun={fun} />
      </div>
      <div style={style.lowerBox}>
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
              <td onClick={fun2} style={style.pointer} className="h-align">
                History
              </td>
            </tr>
            <tr>
              <td style={style.pointer} className="h-align">
                Account
              </td>
            </tr>
            <tr>
              <td style={style.pointer} className="h-align">
                Recipes
              </td>
            </tr>
            <tr>
              <td style={style.pointer} className="h-align">
                Ingredients
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Filter1;
