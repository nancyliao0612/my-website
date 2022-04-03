import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="aboutPic">
        <div className="content-container">
          {/* <img
            src="https://i.imgur.com/ln9vmx4.png?2"
            alt="Greetung"
            className="greeting"
          /> */}
          {/* <h1 className="about-me">About Me</h1>
          <div className="underline"></div> */}
          <p className="blog-intro">
            這個部落格是我練習寫程式所建立的網站。文章主題會與登山、伊斯坦堡求學以及旅遊冒險相關。
          </p>
          <div>
            <p className="quote">
              I code the website from scratch to practice programming skills and
              share my enthusiasm of life. Topics include student exchange
              experiences in Istanbul, hiking, and coding. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
