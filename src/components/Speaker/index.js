import React, { Component } from 'react';
import SocialIcons from '../SocialIcons';
import { isChrome } from '../../utils/Environment';
import LazyLoad from 'react-lazyload';
import './Speaker.css';

class Speaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSize: {
        width: 0,
        height: 0,
      },
    };
  }

  setImageSize() {
    let width = 438;

    if (window.innerWidth > 1200) {
      width = 438;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      width = 318;
    } else if (window.innerWidth >= 460 && window.innerWidth < 768) {
      width = 220;
    } else if (window.innerWidth < 460) {
      width = window.innerWidth - 90;
    }

    let imageSize = {
      width: width,
      height: width / (440 / 495),
    };

    this.setState({ imageSize });
  }

  componentDidMount() {
    this.setImageSize();
    window.addEventListener('resize', this.setImageSize.bind(this));
    window.addEventListener('orientationchange', this.setImageSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setImageSize.bind(this));
    window.removeEventListener(
      'orientationchange',
      this.setImageSize.bind(this)
    );
  }

  render() {
    const { speaker } = this.props;
    const imageExtension = isChrome() ? 'webp' : 'jpg';
    return (
      <div className="speaker">
        <LazyLoad height={this.state.imageSize.height} offset={150}>
          <img
            src={`/speakers/${speaker.image_src}.${imageExtension}`}
            className="drop-shadow"
            style={this.state.imageSize}
            alt={`${speaker.first_name} ${speaker.last_name}`}
          />
        </LazyLoad>
        <SocialIcons data={speaker.social_icons} />
        <div className="speaker-info">
          <h2>
            <span className="speaker-first-name">
              {speaker.first_name}
            </span>{' '}
            <span className="speaker-last-name">{speaker.last_name}</span>
          </h2>
          <span className="speaker-position">
            {speaker.position}
          </span>
          <span className="speaker-company">
            {speaker.company}
          </span>
          <p className="speaker-description">
            {speaker.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Speaker;
