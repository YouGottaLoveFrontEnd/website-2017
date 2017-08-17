import React, { Component } from 'react';
import './MenuButtom.css';

class MenuButtom extends Component {
  showMenu() {
    alert();
  }

  render() {
    return (
      <div className="menu">
        <div className="menu-btn" onClick={this.showMenu.bind(this)}>
          Menu
        </div>
      </div>
    );
  }
}

export default MenuButtom;
