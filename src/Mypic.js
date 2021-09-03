import React from "react";
import { myPics } from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// import myPhoto from "./myPhoto.svg";
// import { ReactComponent as Logo } from "./myPhoto.svg";

const Mypic = () => {
  return (
    <section className="section">
      <div className="section-center">
        {myPics.map((pic) => {
          const { id, image } = pic;
          return <img src={image} alt="myPic" className="myPic" />;
        })}
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Mypic;
