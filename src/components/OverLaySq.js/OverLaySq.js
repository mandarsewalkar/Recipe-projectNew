import React, { useContext, useState } from "react";
import "/Users/mymac/Desktop/rep project/my-react-app/src/components/OverLaySq.js/OverLaySq.css";
import But from "../But/But";
import MainContext from "../../GlobalState/MainContext";

export default function OverLaySq({ fun, overLay, fun3, text }) {
  const storedData = localStorage.getItem("formDataList");
  const data = JSON.parse(storedData);
  const { user, setUser } = useContext(MainContext);

  const style = {
    border: {
      border: "1px solid black",
      width: "100%",
    },
    but: {
      padding: "10px 25px",
      borderRadius: "20px",
    },
    red: {
      color: "red",
      fontSize: "20px",
    },
  };

  // State variables
  const [correct, setCorrect] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false); // State variable for error

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const foundUser = data.find((user) => user.email === email);

    if (foundUser && foundUser.password === password) {
      setCorrect(true);
      console.log("Sign-in successful!");
      setUser(email);
      setEmail("");
      setPassword("");
      setError(false); // Reset error state
    } else {
      setCorrect(false);
      console.log("Email or password is incorrect.");
      setError(true); // Set error state
    }
  };

  return (
    <div className={`overlaysq ${overLay ? "overlay-activesq , center" : ""}`}>
      <div
        className={`overlay-contentsq ${
          overLay ? "overlay-content-activesq" : ""
        }`}
      >
        <div className="h-alignBet">
          <div></div>
          <div onClick={fun}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>
        <div className=" h80 , v-alignBet">
          <form onSubmit={handleSubmit} className="a100 , v-align">
            <div>
              <div>
                <label htmlFor="email">Email:</label>
              </div>
              <div>
                <input
                  style={style.border}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="password">Password:</label>
              </div>
              <div>
                <input
                  style={style.border}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {error && (
              <div className="h-align" style={style.red}>
                ERROR, password or email combination is incorrect
              </div>
            )}{" "}
            {/* Render error div based on error state */}
            <div className="h-align">
              <button type="submit" style={style.but}>
                Submit
              </button>
            </div>
          </form>
          <div className="h-align">
            <But text={text} fun={fun3} disabled={!correct} />
          </div>
        </div>
      </div>
    </div>
  );
}
