import React from "react";
import ReactDOM from "react-dom/client";
// import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { HooksAPP } from "./HooksAPP";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksAPP /> */}
    {/* <CounterApp /> */}
    <CounterWithCustomHook />
  </React.StrictMode>
);