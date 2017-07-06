import React, { Component } from 'react';
import Speaker from '../Speaker';
import BuyTicketsButton from '../BuyTicketsButton';
import './Speakers.css';
import speakersData from '../../assets/data/speakers.json';

class Speakers extends Component {
  render() {
    const speakers = speakersData.all.map(speaker =>
      <Speaker key={speaker.image_src} speaker={speaker} />
    );

    return (
      <div className="speakers">
        <div className="container container-fluid">
          <div className="container-header speakers-header">
            <span>
              1 <i>Amazing Talks</i>
            </span>
            <h1>Speakers</h1>
            <div className="container-header-flexbox">
              <div className="container-header-info">
                <p>
                  This year YGLF is hosting amazing speakers from all around the
                  world. Listed below are our selected speakers. For the whole
                  lineup you can visit our Speakers page. Make sure to check
                  back reguraly as this is just the beginning and we have many
                  more to be announced soon!
                </p>
                <BuyTicketsButton />
              </div>
            </div>
          </div>
          <div className="speakers-list">
            {speakers}
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;
