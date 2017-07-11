import React, { Component } from 'react';
import './Workshops.css';

class Workshops extends Component {
  render() {
    return (
      <div className="workshops">
        <div className="container container-fluid">
          <div className="container-header">
            <span>
              3 <i>Exceptional Exercises</i>
            </span>
            <h1>Workshops</h1>
            <div className="container-header-flexbox">
              <div className="container-header-info">
                <p className="main">
                  This year we are introducing one more day for you to enjoy. It
                  is filled with two 8 hours workshops.
                </p>
                <h3>Brian Holt, Netflix</h3>
                <p>TBD</p>
                <h3>Richard Feldman, NoRedInk</h3>
                <p>TBD</p>
                <p className="main">Stay tuned for more!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Workshops;
