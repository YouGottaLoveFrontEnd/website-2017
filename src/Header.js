import React, { Component } from 'react';
import BuyTicketsButton from './BuyTicketsButton';
import { Link } from 'react-router-dom'

class Header extends Component {


  render() {
    return (
      <header className="header">
	      <div className="header-title">
	      	<div className="container-fluid">
				<Link to="/">You Gotta Love Frontend Conference</Link>
	      	</div>
	      </div>
	      <div className="header-description">
	      	<div className="container-fluid">
	      		The largest conference in the middle east, Made by developers for developers 
	      	</div>
	      </div>
	      <div className="header-date-location">
	      	<div className="container-fluid">
	      		<span><strong>30-31 October</strong>, Camari Tel Aviv</span>
	      		<BuyTicketsButton/>
	      	</div>
	      </div>
      </header>
    );
  }
}

export default Header;
