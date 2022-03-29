import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || ""
  );

  function toggleTheme() {
    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "" : "dark";
    });
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
