import RoadmapChapter from './RoadmapChapter';
import { getChapters } from '../../data';
import "./index.css";

const chapters = getChapters();

const Roadmap = () => (
  <>
    <div className="back-of-team" id="roadmap">
      <h1 className="title1">ROADMAP</h1>
      <div className="back2">
      </div>
    </div>
    <div className="chapters_section">
      <div className="chapters">
        {chapters.map((chapter, idx) => (
          <RoadmapChapter key={idx} idx={idx + 1} {...chapter} />
        ))}
      </div>
      <div className="chapter_images">
        <img src="assets/photo/maks 2.png" />
        <img src="assets/photo/Winter_Hat.png" />
        <img src="assets/photo/aaaa.png" />
      </div>
    </div>
  </>
);

export default Roadmap;