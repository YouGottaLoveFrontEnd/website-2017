import React, { Component } from 'react';
import './Workshops.css';

class Workshops extends Component {
  render() {
    return (
      <div className="workshops">
        <div className="container container-fluid">
          <div className="container-header">
            <span>
              2 <i>Hands on Experience</i>
            </span>
            <h1>Workshops</h1>
            <div className="container-header-flexbox">
              <div className="container-header-info">
                <p className="main">
                  For the first time, join us for one two YGLF master class
                  workshops with world renowed experts. Use this opportunity to
                  hone your skills and delve into the cutting edge of Frontend
                  development.
                </p>
                <div className="content-container">
                  <div className="workshop-container">
                    <p className="workshop-author">RICHARD FELDMAN</p>
                    <h2 className="workshop-title">Learning Elm!</h2>
                    <p className="workshop-description">
                      Come join Richard Feldman and learn how to build Elm
                      application from zero to production-ready. Find out why
                      people say that learning Elm changed the wat they wrote
                      code in other langugages... for the better!
                    </p>
                  </div>
                  <div className="workshop-container">
                    <p className="workshop-author">BRIAN HOLT</p>
                    <h2 className="workshop-title">React + Redux</h2>
                    <p className="workshop-description">
                      Get up to speed on building apps using React and Redux,
                      two of very useful tools to have in your toolbox. Learn
                      how to take advantage of these technologies and avoid
                      common pitfalls in order to drive your applications
                      further than ever before.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workshops;
