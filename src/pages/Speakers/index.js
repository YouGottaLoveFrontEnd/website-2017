import React, { Component } from 'react';
import Speakers from '../../components/Speakers';
import './Speakers.css';

class SpeakersPage extends Component {
  render() {
    return (
      <div className="speakers-page">
        <Speakers />
      </div>
    );
  }
}

export default SpeakersPage;
