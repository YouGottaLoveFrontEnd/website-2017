import React, { Component } from 'react';
import InfoBlock from '../../components/InfoBlock';
import InfoBlocksData from '../../assets/data/info-blocks.json';
import sponsorsData from '../../assets/data/sponsors.json';
import './Sponsors.css';

class Sponsors extends Component {
  render() {
    const sponsors = sponsorsData.map(sponsor =>
      <div
        className={`sponsor-item ` + sponsor.className}
        key={sponsor.image_src}
      >
        <img src={sponsor.image_src} />
      </div>
    );

    return (
      <div className="sponsors">
        <div className="container container-fluid">
          <InfoBlock data={InfoBlocksData.sponsorsPage} />
          <div className="sponsors-list">
            {sponsors}
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
