import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { MotionConfig } from "framer-motion";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./Context/theme";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>,
  rootElement
);
