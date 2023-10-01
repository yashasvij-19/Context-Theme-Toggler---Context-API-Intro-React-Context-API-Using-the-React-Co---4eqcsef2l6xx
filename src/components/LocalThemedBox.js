import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(theme);

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  const toggleLocalTheme = () => {
    setLocalTheme((prevLocalTheme) =>
      prevLocalTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      id="local-themed-box"
      className={localTheme === "light" ? "bg-light" : "bg-dark"}
    >
      <p
        id="local-themed-text-container"
        className={localTheme === "light" ? "txt-light" : "txt-dark"}
      >
        Some Text
      </p>
      <button
        className={`btn ${localTheme === "light" ? "btn-light" : "btn-dark"}`}
        id="local-theme-toggler"
        onClick={toggleLocalTheme}
      >
        {localTheme === "light"
          ? "Toggle local theme to dark"
          : "Toggle local theme to light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };
