import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { isChrome } from '../../utils/Environment';
import InfoBlock from '../../components/InfoBlock';
import TeamPerson from '../../components/TeamPerson';
import teamData from '../../assets/data/team.json';

import './About.css';

class About extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const imageRatio = 1206 / 625;
    const halfWidth = window.innerWidth / 2;
    const gutterSize = 45;
    const imageExtension = isChrome() ? 'webp' : 'jpg';

    const imageHeight = gutterSize * 13 - 1;

    const aboutStyle = {
      height: imageHeight,
    };

    const imageStyle = {
      width: imageHeight * imageRatio,
      height: imageHeight,
    };

    const whoWeAre = {
      number: 1,
      numberTitle: 'Who We Are',
      title: 'This Year',
      text:
        'Set in the sunny city of Tel-Aviv YGLF is a community event made by developers, for developers. This non-profit conference is aimed at delivering high quality content about relevant topics that any FrontEnd lover would die to hear. Bringing in internationally recognized speakers and attendees, with the young StartUp nation atmosphere, to create a buzzing bustle of software engineers from around the globe. And as usual, a hefty lunch, refreshing beer and plenty of coffee breaks spark the most interesting conversations between colleagues and strangers alike.',
    };

    const team = {
      number: 2,
      numberTitle: 'Good Vibes',
      title: 'The Team',
      text:
        'A small group of super dedicated people, working hard around the clock to make the most awesome conference ever. During YGLF Conference, you can find a member of the team at the registration desk at all times. Please come and talk to us if you need assistance.',
    };

    const teamPersons = teamData.all.map(person =>
      <TeamPerson key={person.image_src} person={person} />
    );

    return (
      <div className="about-page">
        <div className="about-page-header" style={aboutStyle}>
          <div className="about-page-header-image">
            <LazyLoad>
              <img
                src={`about-header-photo.${imageExtension}`}
                className="drop-shadow"
                alt={``}
                style={imageStyle}
              />
            </LazyLoad>
          </div>
          <div className="about-page-header-text">
            <h1>About</h1>
            <p>
              The Third international conference of its kind to be held in
              Israel, will take place in Tel Aviv from October 30th through
              October 31st, 2017.
            </p>
          </div>
        </div>
        <div className="container">
          <InfoBlock data={whoWeAre} />
          <div className="about-page-past">
            <div className="about-page-past-section">
              <h3>YGLF 2015</h3>
              <p>
                Kicking off with JavaScript ‘sensei’, Douglas Crockford, the
                2015 inauguration event was roaring. Complete with an
                after-party venue for the evenings, everyone rambled on about
                Martin Kleppe’s interactive art display into the night.
                Supported by non-stop sunshine, it was the first convention of
                its kind in Israel.
              </p>
              <a href="#">VIEW 2015 TALKS</a>
            </div>
            <div className="about-page-past-section">
              <h3>YGLF 2016</h3>
              <p>
                At the second run of the conference we gladly hosted Lea Verou
                along other world-class Front-End gurus. In and around the
                talks, the technical and social vibe dominated the stage, the
                bar and the lounge.
              </p>
              <a href="#">VIEW 2016 TALKS</a>
            </div>
          </div>
          <InfoBlock data={team} />
          <div className="team-list">
            {teamPersons}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
