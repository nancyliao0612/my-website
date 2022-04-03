import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const LandingPage = () => {
  // aos animation
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // theme context
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <img
        src={
          theme
            ? "https://i.imgur.com/zSonPg5.png"
            : "https://i.imgur.com/qOG7EOf.png"
        }
        alt=""
        className="dark-leaf-special"
      />
      <section className="landing-page">
        <div className="blog-intro-container" data-aos="fade-left">
          <h1>Hey There,</h1>
          <h1>I'm Nancy</h1>
          <p>Welcome to my blog! </p>
          <p className="landing-page-quote">
            I code the website from scratch to practice programming skills and
            share my enthusiasm of life. Topics include student exchange
            experiences in Istanbul, hiking, and coding. Stay tuned!
          </p>
          <img
            src="https://i.imgur.com/0KJNEaJ.png"
            alt="explore-leaf"
            className="explore-leaf"
          />
        </div>
        <img
          src="https://i.imgur.com/3ng32c0.png?1"
          alt="nancy-leaf"
          className="nancy-pic"
          data-aos="fade-right"
        />
      </section>
    </main>
  );
};

export default LandingPage;
