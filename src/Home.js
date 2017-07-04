import React, { Component } from 'react';
import Speakers from './Speakers';
import Intro from './Intro';
import About from './About';

class Home extends Component {


  render() {
  	window.scrollTo(0, 0);
    return (
      <div className="home">
      	<Intro/>
      	<Speakers/>
      	<About/>
      </div>
    );
  }
}

export default Home;
