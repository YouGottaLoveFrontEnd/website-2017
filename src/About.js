import React, { Component } from 'react';

class About extends Component {


  render() {
    return (
      <div className="about">
	      <div className="container">
	      	<div className="container-header">
	      		<span>2 <i>Awesome Spaces</i></span>
	      		<h1>The Venue</h1>
	      		<div className="container-header-flexbox">
		      		<div className="container-header-info">
			      		<p>For the first year of YGLF, we chose to make the Cameri Theater our home. It has a really beautiful lobby, a sunny balcony, and a cool theatre hall to host our lectures. It’s also bang in the middle of Tel Aviv, and accessible by public transportation.</p>
			      		<h3>The Cameri Theatre of Tel Aviv</h3>
			      		<p>Sderot Sha'ul HaMelech 19, Tel Aviv-Yafo, Israel</p>
			      	</div>
		      		<div className="container-header-image">
		      			<img className="drop-shadow" src="kamari.png"/>
		      		</div>
	      		</div>
	      	</div>
	      </div>
      </div>
    );
  }
}

export default About;
