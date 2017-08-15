import React, { Component } from 'react';
import WorkshopItem from '../../components/WorkshopItem';
import workshopsData from '../../assets/data/workshops.json';
import './Workshops.css';

class Workshops extends Component {
  render() {
    const workshopsItems = workshopsData.map(workshop =>
      <WorkshopItem key={workshop.title} workshop={workshop} />
    );

    return (
      <div className="workshops">
        <div className="container container-fluid">
          <div className="container-header">
            <span>
              2 <i>Hands on Experience</i>
            </span>
            <h1>Workshops</h1>
            <div className="container-header-flexbox">
              <div className="container-header-info">
                <p className="main">
                  For the first time, join us for one two YGLF master class
                  workshops with world renowed experts. Use this opportunity to
                  hone your skills and delve into the cutting edge of Frontend
                  development.
                </p>
                <div className="content-container">
                  {workshopsItems}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workshops;
