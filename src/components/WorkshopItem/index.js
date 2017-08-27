import React, { Component } from 'react';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import './WorkShopItem.css';

class WorkShopItem extends Component {
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
    const { workshop } = this.props;
    return (
      <div className="workshop-container">
        <p className="workshop-author auto-height-fix-title">
          {workshop.first_name.toUpperCase()} {workshop.last_name.toUpperCase()}
        </p>
        <h2 className="workshop-title auto-height-fix-title">
          {workshop.title}
        </h2>
        <p className="workshop-description auto-height-fix">
          {workshop.text}
        </p>
      </div>
    );
  }
}

export default WorkShopItem;
