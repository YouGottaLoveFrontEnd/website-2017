import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  close() {
    this.props.toggleMenu(false);
  }

  render() {
    return (
      <div
        className={
          this.props.isOpen ? `menu-overlay show` : `menu-overlay hide`
        }
        onClick={this.close.bind(this)}
      >
        <div className="menu-back-wrapper">
          <div className="menu-back">
            <a>BACK</a>
          </div>
        </div>
        <div className="menu-list">
          <div className="menu-list-item">
            <Link to="/" onClick={this.close.bind(this)}>
              Home
            </Link>
          </div>
          <div className="menu-list-item">
            <Link to="/about" onClick={this.close.bind(this)}>
              About
            </Link>
          </div>
          <div className="menu-list-item">
            <Link to="/speakers">Speakers</Link>
          </div>
          <div className="menu-list-item">
            <Link to="/sponsors">Sponsors</Link>
          </div>
          <div className="menu-list-item">
            <Link to="/schedule">Schedule</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
