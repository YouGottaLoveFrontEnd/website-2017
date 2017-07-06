import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IntroStage from './IntroStage';
import './Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.canvas = null;
    this.isMobile = window.innerWidth < 768;

    this.resizeTimeout = null;
  }

  componentDidMount() {
    this.canvas = ReactDOM.findDOMNode(this.refs.canvas);
    this.introWrapper = ReactDOM.findDOMNode(this.refs.introWrapper);
    this.introStage = new IntroStage(this.canvas);

    if (this.isMobile) {
      this.introWrapper.style.height = window.innerHeight + 'px';
    }

    this.setCanvasSize(window.innerWidth, this.isMobile ? 224 : 674);

    window.addEventListener('resize', this.resize.bind(this));

    //window.addEventListener('orientationchange', this.resize.bind(this));

    this.initIntro();
  }

  initIntro() {
    this.introStage.bind();
  }

  resize() {
    window.clearTimeout(this.resizeTimeout);

    this.resizeTimeout = window.setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  setCanvasSize(width, height) {
    this.canvas.setAttribute(
      'style',
      'width:' + width + 'px; height:' + height + 'px;'
    );
    this.canvas.setAttribute('width', width * 2);
    this.canvas.setAttribute('height', height * 2);
  }

  render() {
    return (
      <div className="intro" ref="introWrapper">
        <canvas ref="canvas" />
      </div>
    );
  }
}

export default Intro;
