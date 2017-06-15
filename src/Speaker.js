import React, { Component } from 'react';
import SocialIcons from './SocialIcons';
import './Speaker.css';

class Speaker extends Component {

    render() {

    	let imageWidth = window.innerWidth > 480 ? 480 : window.innerWidth - 120;

    	const imgStyle = {
    		width: imageWidth,
    		height: imageWidth
    	}

    	return (
	      <div className="speaker">
	      	<SocialIcons/>
	      	<img src={this.props.speaker.image_src} className="drop-shadow" style={imgStyle}/>
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

