const RoadmapChapter = ({ title, text, idx }) => (
  <div>
    <h2>{title}</h2>
    <div className="count_container">
      <h2>{idx}</h2>
      <img src="assets/photo/acorn_2 6.svg" />
    </div>
    <p>{text}</p>
  </div>
);

export default RoadmapChapter;