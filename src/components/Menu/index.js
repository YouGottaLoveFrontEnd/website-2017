import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
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
            <Link to="/workshops">Workshops</Link>
          </div>
          <div className="menu-list-item">
            <a className="disabled">Sponsors</a>
          </div>
          <div className="menu-list-item">
            <a className="disabled">Schedule</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
