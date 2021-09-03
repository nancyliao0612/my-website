import React from "react";
// import aboutMe from "./picture/aboutMe.JPG";

const About = () => {
  return (
    <div className="about-container">
      <div className="aboutPic">
        <article className="content-container">
          <h1 className="about-me">About Me</h1>
          <div className="underline"></div>
          <p className="blog-intro">Hi，我是 Nancy，這個部落格是我練習寫程式所建立的網站。文章主題會與登山、伊斯坦堡求學以及旅遊冒險相關。</p>
          <p className="quote">"It’s always about excellence and perfection."
          </p>
          <p className="quote">– Alex Honnold, 'Free Solo'.</p>
        </article>
      </div>
    </div>
  );
};

export default About;
