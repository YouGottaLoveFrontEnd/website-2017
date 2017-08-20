import React, { Component } from 'react';
import Speaker from '../Speaker';
import BuyTicketsButton from '../BuyTicketsButton';
import InfoBlock from '../../components/InfoBlock';
import speakersData from '../../assets/data/speakers.json';
import InfoBlocksData from '../../assets/data/info-blocks.json';

import './Speakers.css';

class Speakers extends Component {
  constructor(props) {
    super(props);

    if (props.size !== undefined) {
      this.size = props.size;
    } else {
      this.size = speakersData.all.length;
    }
  }

  render() {
    const speakers = speakersData.all
      .slice(0, this.size)
      .map(speaker => <Speaker key={speaker.image_src} speaker={speaker} />);

    return (
      <div className="speakers">
        <div className="container container-fluid">
          <InfoBlock data={InfoBlocksData.meetOurSpeakers}>
            <BuyTicketsButton />
          </InfoBlock>
          <div className="speakers-list">
            {speakers}
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;
