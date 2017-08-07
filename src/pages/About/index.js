import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { isChrome } from '../../utils/Environment';

import './About.css';

class About extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const imageExtension = isChrome() ? 'webp' : 'jpg';

    return (
      <div className="about-page">
        <div className="about-page-header">
          <div className="about-page-header-image">
            <LazyLoad>
              <img
                src={`about-header-photo.${imageExtension}`}
                className="drop-shadow"
                alt={``}
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
      </div>
    );
  }
}

export default About;
