import React, { Component } from 'react';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import ScheduleEvent from '../../components/ScheduleEvent';

import './ScheduleDay.css';

class ScheduleDay extends Component {
  constructor(props) {
    super(props);
  }

  resize() {
    AutoHeightFix(document.getElementsByClassName('auto-height-fix'));
    AutoHeightFix(document.getElementsByClassName('auto-height-fix-title'));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.resize();

    window.addEventListener('resize', this.resize.bind(this));
  }

  render() {
    const scheduleEvents = this.props.day.events.map(event =>
      <ScheduleEvent key={event.id} event={event} />
    );

    return (
      <div className="schedule-day">
        <h2 className="schedule-day-title auto-height-fix-title">
          {this.props.day.title}
        </h2>
        <p className="schedule-day-date auto-height-fix-title">
          {this.props.day.date}
        </p>
        <div className="schedule-day-timetable">
          {scheduleEvents}
        </div>
      </div>
    );
  }
}

export default ScheduleDay;
