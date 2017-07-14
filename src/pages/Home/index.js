import React, { Component } from 'react';
import Intro from '../../components/Intro';
import About from '../../components/About';
import Speakers from '../../components/Speakers';
import LazyLoad from 'react-lazyload';

class Home extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div className="home">
        <Intro />
        <Speakers />
        <LazyLoad height={400} offset={150}>
          <About />
        </LazyLoad>
      </div>
    );
  }
}

export default Home;
