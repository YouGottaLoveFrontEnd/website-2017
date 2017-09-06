import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listClassName: '',
    };
  }

  close() {
    this.props.toggleMenu(false);
  }

  resize() {
    let listClassName = '';

    if (window.innerHeight < 990 && window.innerHeight > 830) {
      listClassName = 'menu-list-size-1';
    } else if (window.innerHeight < 830 && window.innerHeight > 620) {
      listClassName = 'menu-list-size-2';
    } else if (window.innerHeight < 620) {
      listClassName = 'menu-list-size-3';
    }

    this.setState({ listClassName });
  }

  componentDidMount() {
    this.resize();

    window.addEventListener('resize', this.resize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
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
        <div className={`menu-list ` + this.state.listClassName}>
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
