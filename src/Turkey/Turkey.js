import React from "react";
import cardData from "../cardData";
import Card from "./Card";

const Turkey = () => {
  const card = cardData.map((item) => {
    return (
      <Card
        key={item.id}
        coverImg={item.coverImg}
        title={item.title}
        link={item.link}
        discription={item.discription}
      />
    );
  });

  return (
    <>
      <div className="emptySpace"></div>
      <section className="istanbul-section">
        <img
          src="https://i.imgur.com/KOoHhDS.png"
          alt="istanbul"
          className="title-label"
        />
        <div className="placeInRow">{card}</div>
        <br />
        <br />
      </section>
    </>
  );
};

export default Turkey;
