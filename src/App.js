import { useState } from 'react';
import Header from './components/Header';
import NftCollection from './components/NftCollection';
import Countdown from './components/Countdown';
import SquirrelsImages from './components/SquirrelsImages';
import AboutProject from './components/AboutProject';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from "./components/Footer";
import Video from './components/Video';
import Roadmap from './components/Roadmap/Index';
import Minting from './components/Minting';
import './App.css';

function App() {
  const [isCountDown, setIsCountDown] = useState(true);
  return (
    <>
      <Header />
      <NftCollection />
      {isCountDown ? <Countdown /> : <Minting />}
      <SquirrelsImages />
      <AboutProject />
      <Video />
      <Roadmap />
      <div className="component">
        <Team />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

export default App;
