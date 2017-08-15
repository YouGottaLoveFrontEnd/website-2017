import React, { Component } from 'react';
import Intro from '../../components/Intro';
import About from '../../components/About';
import Speakers from '../../components/Speakers';
import Workshops from '../../components/Workshops';
import InfoBlockImage from '../../components/InfoBlockImage';
import InfoBlocksData from '../../assets/data/info-blocks.json';
import LazyLoad from 'react-lazyload';
import './Home.css';

class Home extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div className="home">
        <Intro />
        <div className="home-bg">
          <Speakers />
          <LazyLoad height={400} offset={150}>
            <Workshops />
          </LazyLoad>
          <InfoBlockImage data={InfoBlocksData.theVenue} />
        </div>
      </div>
    );
  }
}

export default Home;
