import React from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  // Always start in dark mode; the toggle only applies for the current visit.
  const [themename, setthemename] = React.useState("dark");
  const toggeltheme = () =>
    setthemename((current) => (current === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={[{ themename, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
