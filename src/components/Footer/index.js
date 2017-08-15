import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../SocialIcons';
import Subscribe from '../Subscribe';

import './Footer.css';

class Footer extends Component {
  render() {
    let icons = [
      {
        type: 'instagram',
        url: 'https://www.instagram.com/yglfconf',
      },
      {
        type: 'facebook',
        url: 'https://www.facebook.com/YouGottaLoveFrontend',
      },
      {
        type: 'youtube',
        url: 'https://www.youtube.com/channel/UCU-fOxx_kT5OARG0KiksiCA',
      },
      {
        type: 'github',
        url: 'https://github.com/yougottalovefrontend',
      },
    ];

    return (
      <div className="footer">
        <div className="container">
          <div className="footer-flexbox">
            <div>
              <strong>Subscribe</strong>
              <p>
                Exciting things ahead,<br />  stay tuned for more information.
              </p>
              <Subscribe />
            </div>
            <div>
              <strong>Find your way</strong>
              <div className="footer-links">
                <Link to="/">Home</Link>
                <a
                  href="https://www.eventbrite.com/e/you-gotta-love-frontend-2017-tickets-32014463121?aff=websitefooter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tickets
                </a>
                <Link to="/about">About</Link>
                <a
                  href="http://2016.yougottalovefrontend.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YGLF 2016
                </a>
                <Link to="/codeofconduct">Code Of Conduct</Link>
              </div>
            </div>
          </div>
          <div className="footer-flexbox">
            <div className="created-by">
              <span>
                Designed by{' '}
                <a
                  href="http://highondesign.wix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WixStudio
                </a>,
              </span>{' '}
              <span>
                Coded by{' '}
                <a
                  href="https://github.com/paveliko"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pavel Rapoport
                </a>
              </span>
            </div>
            <div>
              <a href="mailto:hello@yougottalovefrontend.com">
                hello@yougottalovefrontend.com
              </a>
              <SocialIcons data={icons} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
