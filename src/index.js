
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TDL from "./TodoList";
import ImageSearchApp from "./ImageSearch";
import RandomColorApp from "./RandomColor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <App /> */}
    <h1>Bai 1</h1>
    <TDL />
    <h1>Bai 2</h1>
    <ImageSearchApp />
    <h1>Bai 3</h1>
    <RandomColorApp />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
