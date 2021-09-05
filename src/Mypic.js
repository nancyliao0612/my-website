import React, { useState, useEffect } from "react";
import pics from "./pics";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Mypic() {
  const [myPics, setMyPics] = useState(pics);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = myPics.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
      setMyPics();
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, myPics]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {myPics.map((nancyPic, personIndex) => {
          const { id, image } = nancyPic;

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
              <img src={image} alt="myPic" className="myPic" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Mypic;
