import React from 'react';
import './SocialIcons.css';

const getClassByType = type => `fa fa-${type}`;

const SocialIcons = ({ data }) => {
  const icons = data.map(iconData =>
    <a
      key={iconData.url}
      href={iconData.url}
      target="_blank"
      rel="noopener noreferrer"
      title={iconData.type}
    >
      <i className={getClassByType(iconData.type)} />
    </a>
  );
  return (
    <div className="social-icons">
      {icons}
    </div>
  );
};

export default SocialIcons;
