import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { isChrome } from '../../utils/Environment';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import InfoBlock from '../../components/InfoBlock';
import InfoBlockImage from '../../components/InfoBlockImage';
import TeamPerson from '../../components/TeamPerson';
import AboutComponent from '../../components/About';
import teamData from '../../assets/data/team.json';
import InfoBlocksData from '../../assets/data/info-blocks.json';
import './About.css';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    AutoHeightFix(document.getElementsByClassName('auto-height-fix'));
    AutoHeightFix(document.getElementsByClassName('auto-height-fix-title'));
  }

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
            <h1 className="auto-height-fix-title">About</h1>
            <p className="auto-height-fix">
              The Third international conference of its kind to be held in
              Israel, will take place in Tel Aviv from October 30th through
              October 31st, 2017.
            </p>
          </div>
        </div>
        <div className="container">
          <InfoBlock data={InfoBlocksData.thisYear} />
          <div className="about-page-past">
            <div className="about-page-past-section">
              <h3 className="auto-height-fix-title">YGLF 2015</h3>
              <p className="auto-height-fix margin-bottom-1">
                Kicking off with JavaScript ‘sensei’, Douglas Crockford, the
                2015 inauguration event was roaring. Complete with an
                after-party venue for the evenings, everyone rambled on about
                Martin Kleppe’s interactive art display into the night.
                Supported by non-stop sunshine, it was the first convention of
                its kind in Israel.
              </p>
              <a
                href="http://2015.yougottalovefrontend.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW 2015 TALKS
              </a>
            </div>
            <div className="about-page-past-section">
              <h3 className="auto-height-fix-title">YGLF 2016</h3>
              <p className="auto-height-fix margin-bottom-2">
                At the second run of the conference we gladly hosted Lea Verou
                along other world-class Front-End gurus. In and around the
                talks, the technical and social vibe dominated the stage, the
                bar and the lounge.
              </p>
              <a
                href="http://2016.yougottalovefrontend.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW 2016 TALKS
              </a>
            </div>
          </div>
          <InfoBlock data={InfoBlocksData.team} />
          <div className="team-list">
            {teamPersons}
          </div>
          <InfoBlockImage data={InfoBlocksData.theVenue} />
        </div>
      </div>
    );
  }
}

export default About;
