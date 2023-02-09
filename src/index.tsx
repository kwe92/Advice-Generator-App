import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppGlobalTheme } from "./indexStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./constants/styling/theme/Theme";
const ele = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(ele);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <AppGlobalTheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
