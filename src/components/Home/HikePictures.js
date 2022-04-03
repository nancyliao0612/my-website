import hikePicData from "../../data/hikePicData";
import HikePics from "../../components/Hiking/HikePics";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function HikePictres() {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const hikePics = hikePicData.map((hikePic) => {
    return <HikePics {...hikePic} key={hikePic.id} />;
  });
  return (
    <section className={theme ? "hiking-picture-dark" : "title-container"}>
      <div>
        <img
          src="https://i.imgur.com/g6VZqgN.png"
          alt="Latest Hikes"
          className="hiking-leaf-label leaf-label"
          data-aos="fade-right"
        />
      </div>
      <div className="hike-pics-scroll" data-aos="fade-up">
        {hikePics}
      </div>
    </section>
  );
}

export default HikePictres;
