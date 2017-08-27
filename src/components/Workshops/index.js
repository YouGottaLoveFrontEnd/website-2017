import React, { Component } from 'react';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import WorkshopItem from '../../components/WorkshopItem';
import workshopsData from '../../assets/data/workshops.json';
import InfoBlock from '../../components/InfoBlock';
import InfoBlocksData from '../../assets/data/info-blocks.json';
import './Workshops.css';

class Workshops extends Component {
  resize() {
    AutoHeightFix(document.getElementsByClassName('auto-height-fix'));
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  render() {
    const workshopsItems = workshopsData.map(workshop =>
      <WorkshopItem key={workshop.title} workshop={workshop} />
    );

    return (
      <div className="workshops auto-height-fix">
        <div className="container container-fluid">
          <InfoBlock data={InfoBlocksData.workshops} />
          <div className="workshops-items">
            {workshopsItems}
          </div>
        </div>
      </div>
    );
  }
}

export default Workshops;
