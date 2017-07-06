import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BuyTicketsButton from '../BuyTicketsButton';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  resize() {
    let height = window.innerWidth > 480 ? 154 : window.innerHeight;

    this.headerWrapper.style.height = height + 'px';
  }

  componentDidMount() {
    this.headerWrapper = ReactDOM.findDOMNode(this.refs.headerWrapper);

    this.resize();

    window.addEventListener('resize', this.resize.bind(this));
  }

  render() {
    return (
      <header className="header">
        <div className="header-wrapper" ref="headerWrapper">
          <div className="header-title">
            <div className="container-fluid">
              <Link to="/">
                <span>You Gotta Love</span> <span>Frontend Conference</span>
              </Link>
            </div>
          </div>
          <div className="header-description">
            <div className="container-fluid">
              The largest conference in the middle east, built by developers for
              developers
            </div>
          </div>
          <div className="header-date-location">
            <div className="container-fluid">
              <span>
                <strong>30-31 October 2017</strong>,{' '}
                <span className="place">The Cameri Theatre | </span>Tel Aviv,
                Israel
              </span>
              <BuyTicketsButton />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
