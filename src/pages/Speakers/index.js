import React, { Component } from 'react';
import Speakers from '../../components/Speakers';
import './Speakers.css';

class SpeakersPage extends Component {
  render() {
    window.scrollTo(0, 0);

    return (
      <div className="speakers-page">
        <Speakers />
      </div>
    );
  }
}

export default SpeakersPage;
