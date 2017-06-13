import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
      	<div className="container">
      		<div className="footer-flexbox">
      			<div>
      				<strong>Subscribe</strong>
      				<p>Exciting things ahead,<br/>  stay tuned for more information.</p>
      				<div className="subscribe">
						<input type="text" />
						<button>OK</button>
      				</div>
      			</div>
      			<div>
      				<strong>Find your way</strong>
      				<div className="footer-links">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/speakers">Speakers</Link>
						<Link to="/details">Details</Link>
						<Link to="/sponsors">Sponsors</Link>
						<a href="http://2016.yougottalovefrontend.com/" target="_blank">YGLF 2016</a>
      				</div>
      			</div>
	      	</div>
      		<div className="footer-flexbox">
      			<div className="created-by">Designed by <a href="http://wixstudio.com/" target="_blank">WixStudio</a>, Coded by <a href="https://github.com/paveliko" target="_blank">Pavel Rapoport</a></div>
      			<div>
      				<a href="mailto:hello@yougottalovefrontend.com">hello@yougottalovefrontend.com</a>
      				<SocialIcons/>
      			</div>
	      	</div>
      	</div>
      </div>
    );
  }
}

export default Footer;
