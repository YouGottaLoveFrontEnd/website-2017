import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SocialIcons from './SocialIcons';
import './Speaker.css';

class Speaker extends Component {

    constructor(props) {

        super(props);

        this.state = {
        	imageSize: {
	        	width: 0,
	        	height: 0		
        	}
        };

        window.addEventListener('resize', this.setImageSize.bind(this));
        window.addEventListener('orientationchange', this.setImageSize.bind(this));

    }

	setImageSize() {

		// let width;

		// if (window.innerWidth > 1200) {
		// 	width = 438;
		// } else if (window.innerWidth > 480 && window.innerWidth < 1200) {
		// 	width = 438;
		// } 

		let width = window.innerWidth > 480 ? 438 : window.innerWidth - 90;
    	let height = window.innerWidth > 480 ? 493 : window.innerWidth - 90;
    	let imageSize = {
    		width: width,
    		height: width / (440 / 495)
    	};

    	this.setState({ imageSize });

	}

	componentDidMount() {
		
        this.setImageSize();

	}

    render() {
    	return (
	      <div className="speaker">
	      	<SocialIcons data={this.props.speaker.social_icons}/>
	      	<img src={this.props.speaker.image_src} className="drop-shadow" style={this.state.imageSize}/>
	      	<div className="speaker-info">
		      	<h2><span className="speaker-first-name">{this.props.speaker.first_name}</span> <span className="speaker-last-name">{this.props.speaker.last_name}</span></h2>
		      	<span className="speaker-position">{this.props.speaker.position}</span>
		      	<span className="speaker-company">{this.props.speaker.company}</span>
		      	<p className="speaker-description">{this.props.speaker.description}</p>
	      	</div>
	      </div>
	    );
    }
}

export default Speaker;

