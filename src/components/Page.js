import React from "react";
import { LocalThemedBox } from "./LocalThemedBox";
import { ThemeContext } from "./ThemeProvider";
import { useContext } from "react";

const Page = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`container ${theme === "light" ? "bg-light" : "bg-dark"}`}
      id="themed-page"
    >
      <p id="themed-text-container" className={`txt-${theme}`}>
        Hiii...
      </p>
      <button className={`btn btn-${theme}`} id="themed-button">
        Sup
      </button>
      <LocalThemedBox />
    </div>
  );
};

export { Page };
