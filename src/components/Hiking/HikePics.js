function HikePics(props) {
  return (
    <div key={props.id}>
      <img src={props.link} alt="hike-pics" className="hikePics" />
    </div>
  );
}

export default HikePics;
