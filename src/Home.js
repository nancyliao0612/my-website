import React from "react";
import Mypic from "./home/Mypic";
import About from "./home/About";
import Latesthikes from "./home/Latesthikes";
import { Link } from "react-router-dom";
import cardData from "./cardData";
import Card from "./Turkey/Card";
// import Footer from "./Footer";

const Home = () => {
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
        <div className="placeInRow">{card}</div>
        <br />
      </section>
      <Latesthikes />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
