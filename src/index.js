import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MainState from "./GlobalState/MainState";

ReactDOM.render(
  <React.StrictMode>
    <MainState>
      <App />
    </MainState>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
