import React, { Component } from 'react';

class About extends Component {


  render() {
    return (
      <div className="about">
	      <div className="container container-fluid">
	      	<div className="container-header">
	      		<span>2 <i>Awesome Spaces</i></span>
	      		<h1>The Venue</h1>
	      		<div className="container-header-flexbox">
		      		<div className="container-header-info">
			      		<p className="main">This year the conference will take place, once again, at the elegant Cameri Theatre - Tel Aviv's municipal theathre. Located in the center of bohemic Tel Aviv, it is considered one of Israel's largest and most respected theathers. The Cameri holds over dozens of yearly productions, inlcuding a touring company. Classical and modern will meet under an urban wrap, for another unforgettable conference.</p>
			      		<h3>The Cameri Theatre of Tel Aviv</h3>
			      		<p className="address">Sderot Sha'ul HaMelech 19, Tel Aviv-Yafo, Israel</p>
			      		<a href="#">Get directions</a>
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
