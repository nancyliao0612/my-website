import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import HikingCard from "./Hiking/HikingCard";

const Hiking = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={
        theme ? "hiking-section dark-hiking-section" : "hiking-section"
      }
    >
      <div className="hiking-huge-container">
        <img
          src="https://i.imgur.com/c1G3wia.png"
          alt="hiking"
          className="title-label"
        />
      </div>
      <div
        className={theme ? "dark-tab-option tab-option" : "tab-option"}
      ></div>
      <HikingCard />
    </section>
  );
};

export default Hiking;
