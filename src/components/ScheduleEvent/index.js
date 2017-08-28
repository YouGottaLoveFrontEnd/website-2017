import React, { Component } from 'react';
import { AutoHeightFix } from '../../utils/ElementManipulation';

import './ScheduleEvent.css';

class ScheduleEvent extends Component {
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
    const paragraphs = this.props.event.paragraphs.map(paragraph =>
      <p className="schedule-event-info-paragraph">
        {paragraph}
      </p>
    );

    return (
      <div className="schedule-event auto-height-fix">
        <div className="schedule-event-time">
          <span className="schedule-event-time-hour">
            {this.props.event.time.hour}
          </span>
          <span className="schedule-event-time-minute">
            {this.props.event.time.minute}
          </span>
        </div>
        <div className="schedule-event-info">
          <h4 className="schedule-event-info-title">
            {this.props.event.title}
          </h4>
          <strong className="schedule-event-info-speaker">
            {this.props.event.speaker} ({this.props.event.company})
          </strong>
          {paragraphs}
        </div>
      </div>
    );
  }
}

export default ScheduleEvent;
