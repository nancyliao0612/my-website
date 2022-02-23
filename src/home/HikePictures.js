import hikePicData from "./hikePicData";
import HikePics from "./HikePics";

function HikePictres() {
  const hikePics = hikePicData.map((hikePic) => {
    return <HikePics {...hikePic} key={hikePic.id} />;
  });
  return (
    <>
      <div className="title-container">
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
