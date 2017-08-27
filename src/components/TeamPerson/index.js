import React, { Component } from 'react';
import SocialIcons from '../SocialIcons';
import { isChrome } from '../../utils/Environment';
import './TeamPerson.css';

class TeamPerson extends Component {
  render() {
    const { person } = this.props;
    const imageExtension = isChrome() ? 'webp' : 'png';

    console.log(person);

    return (
      <div className={`team-person ${person.image_format} ${person.image_src}`}>
        <div className="team-person-wrapper">
          <div className="team-person-container">
            <img
              src={`team/${person.image_src}.${imageExtension}`}
              className="drop-shadow"
              alt={this.props.person.name}
            />
            <div className="team-person-overlay">
              <div className="team-person-social">
                <SocialIcons data={person.social} />
              </div>
            </div>
          </div>
          <div className="team-person-name">
            {person.first_name} {person.last_name}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamPerson;
