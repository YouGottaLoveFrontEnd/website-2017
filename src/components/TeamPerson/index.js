import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { isChrome } from '../../utils/Environment';
import './TeamPerson.css';

class TeamPerson extends Component {
  componentDidMount() {}

  render() {
    const { person } = this.props;
    const imageExtension = isChrome() ? 'webp' : 'jpg';

    return (
      <div className="team-person">
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
        <div className="team-person-position">
          {person.position}
        </div>
      </div>
    );
  }
}

export default TeamPerson;
