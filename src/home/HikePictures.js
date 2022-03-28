import hikePicData from "./hikePicData";
import HikePics from "./HikePics";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function HikePictres(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const hikePics = hikePicData.map((hikePic) => {
    return <HikePics {...hikePic} key={hikePic.id} />;
  });
  return (
    <>
      <div className={props.darkMode ? "dark-bg" : "title-container"}>
        <img
          src="https://i.imgur.com/g6VZqgN.png"
          alt="Latest Hikes"
          className="hiking-leaf-label"
          data-aos="fade-right"
        />
      </div>
      <div className="hike-pics-scroll" data-aos="fade-up">
        {hikePics}
      </div>
      ;
    </>
  );
}

export default HikePictres;
