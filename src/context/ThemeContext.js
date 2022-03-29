import React, { useState } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("");

  function toggleTheme() {
    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "" : "dark";
    });
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
