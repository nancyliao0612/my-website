import React from "react";
import Mypic from "./home/Mypic";
import About from "./home/About";
// import Latesthikes from "./home/Latesthikes";
import { Link } from "react-router-dom";
import cardData from "./cardData";
import Card from "./Turkey/Card";
import LandingPage from "./home/LandingPage";
import HikePictres from "./home/HikePictures";
import ScrollButton from "./ScrollButton";

const Home = (props) => {
  const card = cardData.map((item) => {
    return (
      <Card
        key={item.id}
        coverImg={item.coverImg}
        title={item.title}
        link={item.link}
        discription={item.discription}
        darkMode={props.darkMode}
      />
    );
  });

  return (
    <>
      <LandingPage
        darkMode={props.darkMode}
        // toggleDarkMode={props.toggleDarkMode}
      />
      {/* <Mypic /> */}
      <ScrollButton />
      <About />
      <section className={props.darkMode ? "dark" : "istanbul-section"}>
        <div className="leaf-container">
          <img
            src={
              props.darkMode
                ? "https://i.imgur.com/zSonPg5.png"
                : "https://i.imgur.com/qOG7EOf.png"
            }
            alt="dark-leaf-bg"
            className="dark-leaf-opacity"
          />
        </div>
        <Link to="/TurkeyArticles">
          <img
            src="https://i.imgur.com/am4NrLJ.png"
            alt="istanbul"
            className="istanbul-leaf-label"
          />
        </Link>
        <div className="placeInRow">{card}</div>
        <br />
        <div className="leaf-container">
          <img
            src={
              props.darkMode
                ? "https://i.imgur.com/zSonPg5.png"
                : "https://i.imgur.com/qOG7EOf.png"
            }
            alt="dark-leaf-bg"
            className="dark-leaf-opacity-2"
          />
        </div>
      </section>
      <HikePictres darkMode={props.darkMode} />
      <div className={props.darkMode ? "dark-bg" : "board-section"}>
        <img
          src="https://i.imgur.com/Fws60K3.png"
          alt="life-board"
          className="life-board"
        />
        <div className="leaf-container">
          <img
            src={
              props.darkMode
                ? "https://i.imgur.com/zSonPg5.png"
                : "https://i.imgur.com/qOG7EOf.png"
            }
            alt="dark-leaf-bg"
            className="dark-leaf-opacity-3"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
