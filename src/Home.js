import React from "react";
import Mypic from "./home/Mypic";
import About from "./home/About";
// import Latesthikes from "./home/Latesthikes";
import { Link } from "react-router-dom";
import cardData from "./cardData";
import Card from "./Turkey/Card";
import LandingPage from "./home/LandingPage";
import HikePictres from "./home/HikePictures";

const Home = (props) => {
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
      <LandingPage
        darkMode={props.darkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
      {/* <Mypic /> */}
      <About />
      <div className="leaf-container">
        <img
          src="https://i.imgur.com/3QL3Vc3.png?1"
          alt="dark-leaf-bg"
          className="dark-leaf-opacity"
        />
      </div>
      <section className="istanbul-section">
        <Link to="/TurkeyArticles">
          <img
            src="https://i.imgur.com/am4NrLJ.png"
            alt="istanbul"
            className="istanbul-leaf-label"
          />
        </Link>
        <div className="placeInRow">{card}</div>
        <br />
      </section>
      <div className="leaf-container">
        <img
          src="https://i.imgur.com/aK68Ie8.png?1"
          alt="dark-leaf-bg"
          className="dark-leaf-opacity-2"
        />
      </div>
      <HikePictres />
      <div className="board-section">
        <img
          src="https://i.imgur.com/Fws60K3.png"
          alt="life-board"
          className="life-board"
        />
      </div>
      <div className="leaf-container">
        <img
          src="https://i.imgur.com/3QL3Vc3.png?1"
          alt="dark-leaf-bg"
          className="dark-leaf-opacity-3"
        />
      </div>
    </>
  );
};

export default Home;
