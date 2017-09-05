import React, { Component } from 'react';
import './ReadMore.css';

class ReadMore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    let paragraphs = [];

    if (this.props.paragraphs.length > 0) {
      paragraphs = this.props.paragraphs.map(paragraph =>
        <p>
          {paragraph}
        </p>
      );
    }

    return (
      <div className="read-more">
        <div className="read-more-wrapper">
          {paragraphs}
        </div>
        {this.state.isOpen
          ? <a className="btn-underline">Read less</a>
          : <a className="btn-underline">Read more</a>}
      </div>
    );
  }
}

export default ReadMore;
