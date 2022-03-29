import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AppContext, useGlobalContext } from "./Context";
import { ThemeContext } from "./context/ThemeContext";

const Navbar = () => {
  const { openMenu } = useGlobalContext();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={theme}>
      <div className="nav-center" id="home">
        <div className="nav-header">
          <a href="/">
            <img
              src="https://i.imgur.com/a3AIbE4.png?1"
              className="logo"
              alt="logo"
            />
          </a>
          <div className="toggler">
            <p className="toggler--light">Light</p>
            <div className="toggler--slider" onClick={toggleTheme}>
              <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Dark</p>
            <button className="nav-toggle" onClick={openMenu}>
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
