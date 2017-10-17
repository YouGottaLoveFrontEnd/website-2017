import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AutoHeightFix } from '../../utils/ElementManipulation';
import FontLoader from '../../utils/FontLoader';
import './ReadMore.css';

class ReadMore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      cells: props.cells || 3,
    };
  }

  resize() {
    AutoHeightFix(document.getElementsByClassName('auto-height-fix'));
    AutoHeightFix(document.getElementsByClassName('auto-height-fix-wrapper'));
  }

  componentDidMount() {
    this.container = ReactDOM.findDOMNode(this.refs.readMoreContainer);
    this.wrapper = ReactDOM.findDOMNode(this.refs.readMoreWrapper);
    this.bg = ReactDOM.findDOMNode(this.refs.readMoreBg);
    this.button = ReactDOM.findDOMNode(this.refs.readMoreButton);

    this.openHeight = this.wrapper.clientHeight;
    this.closeHeight = this.state.cells * 45;

    if (FontLoader.loaded) {
      this.toggle(this.state.isOpen);
    } else {
      FontLoader.addLoadCallback(this.toggle.bind(this));
    }

    if (this.openHeight <= this.closeHeight) {
      this.button.style.display = this.bg.style.display = 'none';
    } else {
      this.button.style.display = this.bg.style.display = 'block';
    }
  }

  toggle(isOpen) {
    isOpen = isOpen || false;

    this.setState({
      isOpen: isOpen,
    });

    this.container.style.height =
      (isOpen ? this.openHeight : this.closeHeight) + 'px';

    this.bg.style.height = (isOpen ? this.openHeight : this.closeHeight) + 'px';
  }

  close() {
    this.toggle(false);
  }

  open() {
    this.toggle(true);
  }

  render() {
    let paragraphs = [];

    if (this.props.paragraphs.length > 0) {
      paragraphs = this.props.paragraphs.map(paragraph =>
        <p className="auto-height-fix" key={paragraph}>
          {paragraph}
        </p>
      );
    }

    return (
      <div className="read-more">
        <div className="read-more-container" ref="readMoreContainer">
          <div
            className="read-more-wrapper auto-height-fix-wrapper"
            ref="readMoreWrapper"
          >
            <div className="read-more-bg" ref="readMoreBg" />
            {paragraphs}
          </div>
        </div>
        <div className="read-more-button" ref="readMoreButton">
          {this.state.isOpen
            ? <a className="btn-underline" onClick={this.close.bind(this)}>
                Read less
              </a>
            : <a className="btn-underline" onClick={this.open.bind(this)}>
                Read more
              </a>}
        </div>
      </div>
    );
  }
}

export default ReadMore;
