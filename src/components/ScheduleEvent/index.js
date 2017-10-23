import React, { Component } from 'react';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import ReadMore from '../ReadMore';
import FontLoader from '../../utils/FontLoader';

import './ScheduleEvent.css';

class ScheduleEvent extends Component {
  constructor(props) {
    super(props);
  }

  resize() {
    AutoHeightFix(document.getElementsByClassName('auto-height-fix'));
    AutoHeightFix(document.getElementsByClassName('auto-height-fix-title'));

    setTimeout(() => {
      AutoHeightFix(
        document.getElementsByClassName('auto-height-fix-wrapper'),
        -1
      );
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (FontLoader.loaded) {
      this.resize();
    } else {
      FontLoader.addLoadCallback(this.resize.bind(this));
    }

    window.addEventListener('resize', this.resize.bind(this));
  }

  render() {
    return (
      <div className="schedule-event">
        <div className="schedule-event-time">
          <span className="schedule-event-time-hour">
            {this.props.event.time.hour}
          </span>
          <span className="schedule-event-time-minute">
            {this.props.event.time.minute}
          </span>
        </div>
        <div className="schedule-event-info">
          <div className="schedule-event-info-wrapper">
            <h4 className="schedule-event-info-title auto-height-fix-title">
              {this.props.event.title}
            </h4>
            {this.props.event.speaker
              ? <strong className="schedule-event-info-speaker">
                  {this.props.event.speaker} ({this.props.event.company})
                </strong>
              : ''}
            <div className="schedule-event-info-paragraph">
              <ReadMore paragraphs={this.props.event.paragraphs} cells={1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScheduleEvent;
