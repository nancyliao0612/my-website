import React, { useState } from "react";
import cardData from "../cardData";
import Card from "./Card";
import IstanbulCard from "./IstanbulCards";
import IstanbulTab from "./IstanbulTab";

const allTabs = ["all", ...new Set(cardData.map((card) => card.tab))];

const Turkey = (props) => {
  const [cards, setCards] = useState(cardData);
  const [tabs, setTabs] = useState(allTabs);

  const filterCards = (tab) => {
    if (tab === "all") {
      setCards(cardData);
      return;
    }
    const newCards = cardData.filter((card) => card.tab === tab);
    setCards(newCards);
  };

  return (
    <>
      <section
        className={
          props.darkMode ? "dark-istanbul-section" : "istanbul-section"
        }
      >
        <div className="istanbul-huge-container">
          <img
            src="https://i.imgur.com/XACCl3B.png"
            alt="istanbul"
            className="title-label"
          />
        </div>
        <IstanbulTab
          tabs={tabs}
          filterCards={filterCards}
          darkMode={props.darkMode}
        />
        <div className="placeInRow">
          <IstanbulCard cardData={cards} darkMode={props.darkMode} />
        </div>
        <br />
        <br />
      </section>
    </>
  );
};

export default Turkey;
