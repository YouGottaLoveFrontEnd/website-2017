import React, { Component } from 'react';
import Intro from '../../components/Intro';
import About from '../../components/About';
import Speakers from '../../components/Speakers';

class Home extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div className="home">
        <Intro />
        <Speakers />
        <About />
      </div>
    );
  }
}

export default Home;
