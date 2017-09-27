import React, { Component } from 'react';
import Intro from '../../components/Intro';
import IntroInfo from '../../components/IntroInfo';
import About from '../../components/About';
import Speakers from '../../components/Speakers';
import Workshops from '../../components/Workshops';
import LazyLoad from 'react-lazyload';
import './Home.css';

class Home extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div className="home">
        <Intro />
        <IntroInfo />
        <div className="bg">
          <Speakers size={3} />
          <LazyLoad height={400} offset={150}>
            <Workshops />
          </LazyLoad>
          <About />
        </div>
      </div>
    );
  }
}

export default Home;
