import React, { Component } from 'react';
import InfoBlock from '../../components/InfoBlock';
import InfoBlocksData from '../../assets/data/info-blocks.json';
import './Schedule.css';

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: false,
    };
  }

  resize() {}

  componentWillUnmount() {}

  componentDidMount() {}

  render() {
    return (
      <div className="schedule bg">
        <div className="container">
          <InfoBlock data={InfoBlocksData.schedule}>
            <p className="auto-height-fix">
              Of course, a wealthy lunch, refreshing coffee breaks and quality
              beers are served throughout the day to make it extra fun!
            </p>
          </InfoBlock>
        </div>
      </div>
    );
  }
}

export default Schedule;
