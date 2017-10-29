import React, { Component } from 'react';
import InfoBlock from '../../components/InfoBlock';
import ScheduleDay from '../../components/ScheduleDay';
import InfoBlocksData from '../../assets/data/info-blocks.json';
import scheduleData from '../../assets/data/schedule.json';
import './Schedule.css';

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day_one: true,
      day_two: false,
    };
  }

  toggle(dayId) {
    if (dayId === 'day_one') {
      this.setState({
        day_one: true,
        day_two: false,
      });
    } else {
      this.setState({
        day_one: false,
        day_two: true,
      });
    }
  }

  render() {
    const scheduleDays = scheduleData.days.map(day =>
      <ScheduleDay
        key={day.id}
        day={day}
        isActive={this.state[day.id]}
        onSelect={this.toggle.bind(this, day.id)}
      />
    );

    return (
      <div className="schedule bg">
        <div className="container">
          <InfoBlock data={InfoBlocksData.schedule} />
          <div className="schedule-days">
            {scheduleDays}
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
