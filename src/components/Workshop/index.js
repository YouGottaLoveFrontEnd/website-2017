import React, { Component } from 'react';
import { isChrome } from '../../utils/Environment';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import './Workshop.css';

class Workshop extends Component {
  componentDidMount() {
    AutoHeightFix(document.getElementsByClassName('auto-height-fix'));
  }

  getParagraphs(paragraphsData) {
    return paragraphsData.map(paragraph =>
      <p>
        {paragraph}
      </p>
    );
  }

  render() {
    const { workshop } = this.props;
    const imageExtension = isChrome() ? 'webp' : 'jpg';

    return (
      <div className="workshop">
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
            {this.getParagraphs(workshop.paragraphs)}
          </div>
        </div>
      </div>
    );
  }
}

export default Workshop;
