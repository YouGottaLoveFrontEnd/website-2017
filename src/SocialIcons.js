import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SocialIcons extends Component {


  render() {
    return (
      <div className="social-icons">
        <a href="#">
          <i className="fa fa-instagram"/>
        </a>
        <a href="#">
          <i className="fa fa-twitter"/>
        </a>
        <a href="#">
          <i className="fa fa-facebook"/>
        </a>
      </div>
    );
  }
}

export default SocialIcons;
