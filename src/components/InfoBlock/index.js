import React, { Component } from 'react';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import './InfoBlock.css';

class InfoBlock extends Component {
  resize() {
    AutoHeightFix(document.getElementsByClassName('auto-height-fix'));
    AutoHeightFix(document.getElementsByClassName('auto-height-fix-title'));
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));

    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize.bind(this));
  }

  render() {
    return (
      <div className="info-block">
        <div className="info-block-header">
          <span>
            {this.props.data.number} <i>{this.props.data.numberTitle}</i>
          </span>
        </div>
        <div className="info-block-text">
          <h2 className="auto-height-fix-title">
            {this.props.data.title}
          </h2>
          <p className="auto-height-fix">
            {this.props.data.text}
          </p>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default InfoBlock;
