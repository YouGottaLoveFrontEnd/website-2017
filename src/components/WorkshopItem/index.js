import React, { Component } from 'react';
import './WorkShopItem.css';

class WorkShopItem extends Component {
  render() {
    return (
      <div className="workshop-container">
        <p className="workshop-author">RICHARD FELDMAN</p>
        <h2 className="workshop-title">Learning Elm!</h2>
        <p className="workshop-description">
          Come join Richard Feldman and learn how to build Elm application from
          zero to production-ready. Find out why people say that learning Elm
          changed the wat they wrote code in other langugages... for the better!
        </p>
      </div>
    );
  }
}

export default WorkShopItem;
