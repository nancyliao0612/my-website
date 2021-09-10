import React from "react";
import Mypic from "./home/Mypic";
import About from "./home/About";
import Latesthikes from "./home/Latesthikes";
// import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Mypic />
      <About />
      <Latesthikes />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
