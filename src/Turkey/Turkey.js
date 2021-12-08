import React from "react";
import Istanbul from "../home/Istanbul";
import Pamukkale from "./Pamukkale";

const Turkey = () => {
  return (
    <>
      <h1>hi</h1>
      <img src="" alt="" />
      <section className="istanbul-section">
        <img
          src="https://i.imgur.com/KOoHhDS.png"
          alt="istanbul"
          className="title-label"
        />
        <Pamukkale />
        <hr className="article-hr" />
        <Istanbul />
      </section>
    </>
  );
};

export default Turkey;
