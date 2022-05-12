import React from "react";
import ReactDOM from "react-dom/client";

const rootDOM = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDOM);

root.render(
  <React.StrictMode>
    <p>hello world</p>
  </React.StrictMode>
);
