import React from "react";
import Mypic from "./home/Mypic";
import About from "./home/About";
import Latesthikes from "./home/Latesthikes";
import Istanbul from "./home/Istanbul";
import { Link } from "react-router-dom";
import Pamukkale from "./Turkey/Pamukkale";
import Food from "./Turkey/Food";
import PCR from "./Turkey/PCR";
import Rumination from "./Turkey/Rumination";
// import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Mypic />
      <About />
      <section className="istanbul-section">
        <Link to="/TurkeyArticles">
          <img
            src="https://i.imgur.com/KOoHhDS.png"
            alt="istanbul"
            className="title-label"
          />
        </Link>
        <div className="placeInRow">
          <Rumination />
          <Pamukkale />
          <Istanbul />
        </div>
        <div className="placeInRow">
          <PCR />
          <Food />
        </div>
        <br />
        <br />
      </section>
      <Latesthikes />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
