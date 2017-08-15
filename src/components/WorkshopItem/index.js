import React, { Component } from 'react';
import './WorkShopItem.css';

class WorkShopItem extends Component {
  render() {
    const { workshop } = this.props;
    return (
      <div className="workshop-container">
        <p className="workshop-author">
          {workshop.first_name.toUpperCase()} {workshop.last_name.toUpperCase()}
        </p>
        <h2 className="workshop-title">
          {workshop.title}
        </h2>
        <p className="workshop-description">
          {workshop.text}
        </p>
      </div>
    );
  }
}

export default WorkShopItem;
