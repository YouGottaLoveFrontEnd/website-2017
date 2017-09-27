import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { isChrome } from '../../utils/Environment';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import InfoBlock from '../../components/InfoBlock';
import TeamPerson from '../../components/TeamPerson';
import BuyTicketsButton from '../../components/BuyTicketsButton';
import teamData from '../../assets/data/team.json';
import InfoBlocksData from '../../assets/data/info-blocks.json';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutStyle: {
        height: 0,
      },
      imageStyle: {
        width: 0,
        height: 0,
      },
    };
  }

  resize() {
    const gutterSize = 45;
    const isMobile = window.innerWidth <= 764;
    const imageRatio = 1206 / 625;
    const imageHeight = isMobile ? gutterSize * 8 - 1 : gutterSize * 13 - 1;

    this.setState({
      aboutStyle: {
        height: isMobile ? 'auto' : imageHeight,
      },
      imageStyle: {
        width: imageHeight * imageRatio,
        height: imageHeight,
      },
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.resize();

    AutoHeightFix(document.getElementsByClassName('auto-height-fix'));
    AutoHeightFix(document.getElementsByClassName('auto-height-fix-title'));

    window.addEventListener('resize', this.resize.bind(this));
  }

  render() {
    const imageExtension = isChrome() ? 'webp' : 'png';

    const teamPersons = teamData.all.map(person =>
      <TeamPerson key={person.image_src} person={person} />
    );

    return (
      <div className="about-page bg">
        <div className="about-page-header" style={this.state.aboutStyle}>
          <div className="about-page-header-image">
            <LazyLoad>
              <img
                style={this.state.imageStyle}
                src={`about-header-photo.${imageExtension}`}
                className="drop-shadow"
                alt={``}
              />
            </LazyLoad>
          </div>
          <div className="about-page-header-text">
            <h1 className="auto-height-fix-title">About</h1>
            <p className="auto-height-fix">
              Third time is a charm - the largest international frontend
              conference in the Middle East is happening for the third time
              <small>30-31 October, Tel Aviv</small>
            </p>
            <BuyTicketsButton />
          </div>
        </div>
        <div className="container">
          <InfoBlock data={InfoBlocksData.thisYear} />
          <div className="about-page-past">
            <div className="about-page-past-section">
              <h3 className="auto-height-fix-title">YGLF 2015</h3>
              <p className="auto-height-fix margin-bottom-1">
                Kicking off with JavaScript expert, Douglas Crockford, the 2015
                inauguration event was roaring. Complete with an after-party
                venue for the evenings, everyone rambled on about Martin
                Kleppe’s interactive art display into the night. Supported by
                sun rays of joy and unbelievable energy, it was the first
                convention of its kind in Israel.
              </p>
              <a
                href="https://www.youtube.com/watch?v=7TwrABEAfTk&list=PLII-CO3Ff0qbx_zJYVsmg0pIgf32zyB5p"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-underline"
              >
                VIEW 2015 TALKS
              </a>
            </div>
            <div className="about-page-past-section">
              <h3 className="auto-height-fix-title">YGLF 2016</h3>
              <p className="auto-height-fix margin-bottom-2">
                At the second run of the conference, we gladly hosted Lea Verou
                along with other world-class Frontend gurus. In and around the
                talks, the technical dominated the stage, while social conquered
                the bar and the lounge.
              </p>
              <a
                href="https://www.youtube.com/watch?v=HKYviOtA55A&list=PLII-CO3Ff0qY1VbkvUyLcUmegS3U7XB1D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-underline"
              >
                VIEW 2016 TALKS
              </a>
            </div>
          </div>
          <InfoBlock data={InfoBlocksData.team} />
          <div className="team-list">
            {teamPersons}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
