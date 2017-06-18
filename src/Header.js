import React, { Component } from 'react';
import BuyTicketsButton from './BuyTicketsButton';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {

    	
  render() {

  	let height = window.innerWidth > 480 ?  181 : window.innerHeight;

	const style = {
		height: height
	}

    return (
      <header className="header">
	      <div className="header-wrapper" style={style}>
		      <div className="header-title">
		      	<div className="container-fluid">
					<Link to="/"><span>You Gotta Love</span> <span>Frontend Conference</span></Link>
		      	</div>
		      </div>
		      <div className="header-description">
		      	<div className="container-fluid">
		      		The largest conference in the middle east, built by developers for developers
		      	</div>
		      </div>
		      <div className="header-date-location">
		      	<div className="container-fluid">
		      		<span><strong>30-31 October</strong>, Camari Tel Aviv</span>
		      		<BuyTicketsButton/>
		      	</div>
		      </div>
	      </div>
      </header>
    );
  }
}

export default Header;
