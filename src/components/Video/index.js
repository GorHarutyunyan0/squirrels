import { createRef, useState } from 'react';
import "./index.css";

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = createRef(null);
  const handleShowVideo = () => {
    setShowVideo(shwVdo => {
      if (!shwVdo) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      return !shwVdo;
    });
  };

  return (
    <div className="video-container">
      <video ref={videoRef} controls className="video" src="assets/video.mov" onPause={() => setShowVideo(!showVideo)} />
      {!showVideo && <img src="assets/photo/Polygon 1.svg" onClick={handleShowVideo} />}
    </div>
  );
};

export default Video;