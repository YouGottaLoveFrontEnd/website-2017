import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  constractor(props) {
    this.state = {
      isOpen: false,
    };
  }

  close() {}

  render() {
    return (
      <div className="menu-overlay" onClick={this.close.bind(this)}>
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
            <Link to="/chedule">Schedule</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
