import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IntroStage from './IntroStage';
import './Intro.css';

class Intro extends Component {


    constructor(props) {

        super(props);

        this.canvas = null;
        this.isMobile = window.innerWidth < 768;

        window.Typekit.load({
            async: true,
            active: this.initIntro.bind(this)
        })
    }

    componentDidMount() {

        this.canvas = ReactDOM.findDOMNode(this.refs.canvas);
        this.introWrapper = ReactDOM.findDOMNode(this.refs.introWrapper);
        this.introStage = new IntroStage(this.canvas);

        if (this.isMobile) {
            this.introWrapper.style.height = window.innerHeight + 'px';
        }

        window.addEventListener('resize', this.resize.bind(this));

        window.addEventListener('orientationchange', this.resize.bind(this));

    }

    initIntro() {
        this.resize();
        this.introStage.bind();
    }

    resize() {

        this.setCanvasSize(window.innerWidth, this.isMobile ? 224 : 674);

        //this.introStage.test();

    }


    setCanvasSize(width, height) {

        this.canvas.setAttribute('style', 'width:' + width + 'px; height:' + height + 'px;')
        this.canvas.setAttribute('width', width * 2);
        this.canvas.setAttribute('height', height * 2);
    }

    render() {
        return (
            <div className="intro" ref="introWrapper">
                <canvas ref="canvas"></canvas>
            </div>
        );
    }
}

export default Intro;
