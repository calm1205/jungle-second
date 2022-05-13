import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router/Router";
import { Reset } from "styled-reset";

const rootDOM = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDOM);

root.render(
  <React.StrictMode>
    <Reset />
    <Router />
  </React.StrictMode>
);
