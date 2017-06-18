import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IntroStage from './IntroStage';
import './Intro.css';

class Intro extends Component {


    constructor(props) {
        
        super(props);

        this.canvas = null;

    }

    componentDidMount() {

        this.canvas = ReactDOM.findDOMNode(this.refs.canvas);
        
        this.introStage = new IntroStage(this.canvas);
    	
        this.resize();

        window.addEventListener('resize', this.resize.bind(this));

    }

    resize() {

    	this.setCanvasSize(window.innerWidth, 585);

    	this.introStage.bind();

    }


    setCanvasSize(width, height) {

        this.canvas.setAttribute('style', 'width:' + width + 'px; height:' + height + 'px;')
        this.canvas.setAttribute('width', width * 2);
        this.canvas.setAttribute('height', height * 2);
    }

    render() {
        return (
			<div className="intro">
				<canvas ref="canvas"></canvas>
			</div>
        );
    }
}

export default Intro;
