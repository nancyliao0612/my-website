import React from "react";
// import aboutMe from "./picture/aboutMe.JPG";

const About = () => {
  return (
    <div className="about-container">
      <div className="aboutPic">
        <div className="content-container">
          <img
            src="https://i.imgur.com/ln9vmx4.png?2"
            alt="Greetung"
            className="greeting"
          />
          {/* <h1 className="about-me">About Me</h1>
          <div className="underline"></div> */}
          <p className="blog-intro">
            這個部落格是我練習寫程式所建立的網站。文章主題會與登山、伊斯坦堡求學以及旅遊冒險相關。
          </p>
          <div>
            <p className="quote">
              Welcome to my blog! I code the website from scratch to practice my
              programming skills.
            </p>
            <p className="quote">
              If you see any function not working, don't doubt it. That's just a
              bug that I'm racking my brain to fix.
            </p>
            <p className="quote">
              Topics are relevant to student exchange experience in Istanbul,
              hiking, adventure and coding. Stay tuned!
            </p>
          </div>
          {/* <p className="quote">
            "It’s always about excellence and perfection."
          </p>
          <p className="quote">– Alex Honnold, 'Free Solo'.</p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
