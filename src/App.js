import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import SignUp from "./components/SignUp/SignUp";
import ForthPage from "./components/ForthPage/ForthPage";
import MainContext from "./GlobalState/MainContext";
import IngredientsPage from "./components/IngredientsPage/IngredientsPage";

function App() {
  const [page, setPage] = useState(0);
  const [signUp, setSignUp] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const { classStates, inputValue, isEditing } = useContext(MainContext);

  let filter = null;

  if (JSON.stringify(classStates) === JSON.stringify([true, true, false])) {
    filter = "vegan";
  } else if (
    JSON.stringify(classStates) === JSON.stringify([true, false, true])
  ) {
    filter = "sugarFree";
  } else if (
    JSON.stringify(classStates) === JSON.stringify([false, true, true])
  ) {
    filter = "glutenFree";
  }

  console.log(filter);
  useEffect(() => {
    if (!isEditing) {
      let dish = inputValue;
      async function fetchRep() {
        if (!dish) return; // Handle empty input or cancel

        if (filter === "vegan") {
          dish = `vegan ${dish}`;
        } else if (filter === "sugarFree") {
          dish = `Sugar free ${dish}`;
        } else if (filter === "glutenFree") {
          dish = `Gluten free ${dish}`;
        }

        const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${dish}`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "5f0e54cdd6msh86509acecb82b02p10f9bajsnee4e1f58e9c8",
            "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          setRecipes(result);
        } catch (error) {
          console.error(error);
        }
      }

      fetchRep();
    }
  }, [inputValue, filter, isEditing]);

  function randNXT() {
    setPage(1);
  }

  function ingredient() {
    setPage(2);
  }

  function homePage() {
    setPage(0);
  }

  function Sign() {
    setSignUp(!signUp);
    console.log(signUp);
  }

  // Generate a random integer within the valid range of array indices

  return (
    <div className="App">
      {page === 0 && !signUp && (
        <FirstPage fun={ingredient} fun2={randNXT} fun3={Sign} />
      )}
      {page === 1 && !signUp && <SecondPage fun={homePage} fun2={ingredient} />}
      {page === 2 && !signUp && (
        <IngredientsPage fun={homePage} recipes={recipes} />
      )}

      {signUp && <SignUp fun={Sign} />}
      {/* Render other pages here */}
    </div>
  );
}

export default App;
