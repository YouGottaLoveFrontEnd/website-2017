import React, { Component } from 'react';
import BuyTicketsButton from '../BuyTicketsButton';
import MenuButtom from '../MenuButtom';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper" ref="headerWrapper">
          <MenuButtom toggleMenu={this.props.toggleMenu} />
          <div className="header-title">
            <div className="container-fluid">
              <Link to="/">
                <span>You Gotta Love</span> <span>Frontend Conference</span>
              </Link>
            </div>
          </div>
          <div className="header-description">
            <div className="container-fluid">
              The largest frontend conference in the Middle East, built by
              developers for developers
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
