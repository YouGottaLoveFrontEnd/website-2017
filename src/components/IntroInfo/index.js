import React, { Component } from 'react';
import BuyTicketsButton from '../BuyTicketsButton';
import './IntroInfo.css';

class IntroInfo extends Component {
  render() {
    return (
      <div className="intro-info">
        <div className="intro-info-title">
          <span>You Gotta Love</span> <span>Frontend Conference</span>
        </div>
        <div className="intro-info-location">
          <span>
            <strong>30-31 October 2017</strong>, Cameri Tel Aviv
          </span>
        </div>
        <div className="intro-info-description">
          The largest conference in the middle east,<br />Made by developers for
          developers
        </div>
        <BuyTicketsButton />
      </div>
    );
  }
}

export default IntroInfo;
