import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router/Router";
import ResetCss from "./resetCss";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const rootDOM = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootDOM);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
