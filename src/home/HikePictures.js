import hikePicData from "./hikePicData";
import HikePics from "./HikePics";

function HikePictres(props) {
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
        />
      </div>
      <div className="hike-pics-scroll">{hikePics}</div>;
    </>
  );
}

export default HikePictres;
