import React, { Component } from 'react';
import './SocialIcons.css';

class SocialIcons extends Component {
  getClassByType(type) {
    let className = 'fa fa-' + type;

    return className;
  }

  render() {
    let icons = [];

    for (var i = 0; i < this.props.data.length; i++) {
      let iconData = this.props.data[i];

      let icon = (
        <a key={iconData.url} href={iconData.url}>
          <i className={this.getClassByType(iconData.type)} />
        </a>
      );

      icons.push(icon);
    }

    return (
      <div className="social-icons">
        {icons}
      </div>
    );
  }
}

export default SocialIcons;
