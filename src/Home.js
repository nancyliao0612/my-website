import React, { useEffect, useContext } from "react";
import Mypic from "./home/Mypic";
import About from "./home/About";
// import Latesthikes from "./home/Latesthikes";
import { Link } from "react-router-dom";
import cardData from "./cardData";
import Card from "./Turkey/Card";
import LandingPage from "./home/LandingPage";
import HikePictres from "./home/HikePictures";
import ScrollButton from "./ScrollButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
      <LandingPage />
      <ScrollButton />
      {/* <About /> */}
      {/* <Mypic /> */}
      <section className={theme ? "dark" : "istanbul-section"}>
        <div className="leaf-container">
          <img
            src={
              theme
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
            data-aos="fade-right"
          />
        </Link>
        <div className="placeInRow" data-aos="fade-up">
          {card}
        </div>
        <br />
        <div className="leaf-container">
          <img
            src={
              theme
                ? "https://i.imgur.com/zSonPg5.png"
                : "https://i.imgur.com/qOG7EOf.png"
            }
            alt="dark-leaf-bg"
            className="dark-leaf-opacity-2"
          />
        </div>
      </section>
      <HikePictres />
      <div className={theme ? "dark-bg" : "board-section"}>
        <img
          src="https://i.imgur.com/Fws60K3.png"
          alt="life-board"
          className="life-board"
        />
        <div className="leaf-container">
          <img
            src={
              theme
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
