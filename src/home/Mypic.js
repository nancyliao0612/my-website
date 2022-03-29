import React, { useState, useEffect, useContext } from "react";
import pics from "../pics";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../context/ThemeContext";

function Mypic() {
  const [myPics, setMyPics] = useState(pics);
  const [index, setIndex] = React.useState(0);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const lastIndex = myPics.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, myPics]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  // aos animation
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      className={
        theme
          ? "section-carousel-wrapper dark-section-carousel-wrapper"
          : "section-carousel-wrapper"
      }
      data-aos="fade-up"
    >
      <div className="section-carousel">
        {myPics.map((nancyPic, personIndex) => {
          const { id, image, link } = nancyPic;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === myPics.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <a href={link} target="_blank">
                <img src={image} alt="myPic" className="carousel-image" />
              </a>
            </article>
          );
        })}
      </div>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Mypic;
