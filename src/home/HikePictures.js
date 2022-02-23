import hikePicData from "./hikePicData";
import HikePics from "./HikePics";

function HikePictres() {
  const hikePics = hikePicData.map((hikePic) => {
    return <HikePics {...hikePic} key={hikePic.id} />;
  });
  return <div className="hike-pics-scroll">{hikePics}</div>;
}

export default HikePictres;
