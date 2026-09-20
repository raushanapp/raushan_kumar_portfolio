import React from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = React.useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const toggeltheme = () => {
    const nextTheme = themename === "dark" ? "light" : "dark";
    setthemename(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

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
