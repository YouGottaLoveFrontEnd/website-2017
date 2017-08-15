import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { isChrome } from '../../utils/Environment';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import './TeamPerson.css';

class TeamPerson extends Component {
  componentDidMount() {}

  render() {
    const { person } = this.props;
    const imageExtension = isChrome() ? 'webp' : 'jpg';

    return (
      <div className={`team-person ${person.image_format} ${person.image_src}`}>
        <div className="team-person-wrapper">
          <LazyLoad>
            <img
              src={`team/${person.image_src}.${imageExtension}`}
              className="drop-shadow"
              alt={this.props.person.name}
            />
          </LazyLoad>
          <div className="team-person-name">
            {person.first_name} {person.last_name}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamPerson;
