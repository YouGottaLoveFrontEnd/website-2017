import React, { Component } from 'react';
import BuyTicketsButton from '../../components/BuyTicketsButton';
import InfoBlock from '../../components/InfoBlock';
import Workshop from '../../components/Workshop';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import InfoBlocksData from '../../assets/data/info-blocks.json';
import workshopsData from '../../assets/data/workshops.json';
import './Workshops.css';

class Workshops extends Component {
  componentDidMount() {
    AutoHeightFix(document.getElementsByClassName('auto-height-fix'));
  }

  render() {
    const workshops = workshopsData.map(workshop =>
      <Workshop key={workshop.image_src} workshop={workshop} />
    );

    return (
      <div className="workshops-page">
        <div className="container">
          <div>
            <InfoBlock data={InfoBlocksData.workshopsPage}>
              <div className="workshops-info">
                <p>
                  The workshops will take place on the 1st of November, 2017, in
                  the Tel-Aviv port and will be limited up to 25 participants
                  each. Additional details will be sent at a later date.
                </p>
                <BuyTicketsButton />
              </div>
            </InfoBlock>
          </div>
          <div className="workshops-list">
            {workshops}
          </div>
        </div>
      </div>
    );
  }
}

export default Workshops;
