import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router/Router";
import ResetCSS from "./ResetCSS";

const rootDOM = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDOM);

root.render(
  <React.StrictMode>
    <ResetCSS />
    <Router />
  </React.StrictMode>
);
