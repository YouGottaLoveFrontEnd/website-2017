import React, { Component } from 'react';
import { isChrome } from '../../utils/Environment';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import ReadMore from '../ReadMore';
import './Workshop.css';

class Workshop extends Component {
  componentDidMount() {
    AutoHeightFix(document.getElementsByClassName('auto-height-fix'));
  }

  render() {
    const { workshop } = this.props;
    const imageExtension = isChrome() ? 'webp' : 'jpg';

    return (
      <div className="workshop-item">
        <div className="workshop-image">
          <img
            src={`/workshop/${workshop.image_src}.${imageExtension}`}
            className="drop-shadow"
            alt={`${workshop.first_name} ${workshop.last_name}`}
          />
        </div>
        <div className="workshop-info">
          <p className="workshop-author">
            {workshop.first_name} {workshop.last_name}
          </p>
          <h2 className="workshop-title">
            {workshop.title}
          </h2>
          <div className="workshop-paragraphs">
            <ReadMore paragraphs={workshop.paragraphs} />
          </div>
        </div>
      </div>
    );
  }
}

export default Workshop;
