import React, { Component } from 'react';
import InfoBlock from '../../components/InfoBlock';
import { isChrome } from '../../utils/Environment';
import './InfoBlockImage.css';

class InfoBlockImage extends Component {
  componentDidMount() {}

  render() {
    const imageExtension = isChrome() ? 'webp' : 'png';

    return (
      <div className="info-block-image">
        <div className="info-block-image-left">
          <img
            className="drop-shadow"
            src={`cameri.${imageExtension}`}
            ref="image"
            alt="The Cameri Theatre of Tel Aviv"
          />
          <span />
        </div>
        <div className="info-block-image-right">
          <InfoBlock data={this.props.data} />
        </div>
      </div>
    );
  }
}

export default InfoBlockImage;
