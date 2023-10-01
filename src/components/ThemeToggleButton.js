import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <>
      <button
        className={`btn ${
          theme === "light" ? "btn-light txt-light" : "btn-dark txt-dark"
        }`}
        id="global-theme-toggler"
        onClick={handleToggleTheme}
      >
        {theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      </button>
    </>
  );
};
export { ThemeToggleButton };
