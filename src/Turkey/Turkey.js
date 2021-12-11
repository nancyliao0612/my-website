import React from "react";
import Istanbul from "../home/Istanbul";
import Pamukkale from "./Pamukkale";
import Food from "./Food";

const Turkey = () => {
  return (
    <>
      <div className="emptySpace"></div>
      <section className="istanbul-section">
        <img
          src="https://i.imgur.com/KOoHhDS.png"
          alt="istanbul"
          className="title-label"
        />
        <Food />
        <hr className="article-hr" />
        <Pamukkale />
        <hr className="article-hr" />
        <Istanbul />
        <br />
        <br />
      </section>
    </>
  );
};

export default Turkey;
