import React, { useContext, useState } from "react";
import "/Users/mymac/Desktop/rep project/my-react-app/src/components/OverLaySq.js/OverLaySq.css";
import But from "../But/But";
import MainContext from "../../GlobalState/MainContext";
import style from "../Input/style";
import Form from "../Form/Form";
import Cross from "../Cancel/Cancel";

export default function OverLaySq(props) {
  const { fun, overLay, fun3, text } = props;
  const storedData = localStorage.getItem("formDataList");
  const data = JSON.parse(storedData);
  const { setUser, SessionId, setSessionId, setProColor, ProColor } =
    useContext(MainContext);

  // State variables
  const [correct, setCorrect] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false); // State variable for error

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    const foundUser = data.find((user) => user.email === email);

    if (foundUser && foundUser.password === password) {
      console.log("Name:", foundUser.Name);
      setCorrect(true);
      console.log("Sign-in successful!");
      fun(() => fun);
      setUser(foundUser.Name);
      setProColor(foundUser.ProfileColor);
      const ID = Math.floor(Math.random() * 99999);
      setSessionId(ID);
      console.log(SessionId);
    } else {
      setCorrect(false);
      console.log("Email or password is incorrect.");
      setError(true); // This should set the error state variable to true
    }
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePass = (e) => setPassword(e.target.value);

  const form = {
    handleEmail,
    handlePass,
    email,
    password,
    error,
  };

  return (
    <div className={`overlaysq ${overLay ? "overlay-activesq , center" : ""}`}>
      <div
        className={`overlay-contentsq ${
          overLay ? "overlay-content-activesq" : ""
        }`}
      >
        <div className="align-left">
          <Cross fun={fun} />
        </div>
        <div className=" h80 , v-alignBet">
          <form onSubmit={handleSubmit} className="a100 , v-align">
            <Form form={form} />
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
