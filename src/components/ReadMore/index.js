import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AutoHeightFix } from '../../utils/ElementManipulation';
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

    setTimeout(() => {
      AutoHeightFix(document.getElementsByClassName('auto-height-fix-wrapper'));
    });
  }

  componentDidMount() {
    this.container = ReactDOM.findDOMNode(this.refs.readMoreContainer);
    this.wrapper = ReactDOM.findDOMNode(this.refs.readMoreWrapper);

    this.openHeight = this.wrapper.clientHeight;
    this.closeHeight = this.state.cells * 45;

    this.toggle(this.state.isOpen);
  }

  toggle(isOpen) {
    this.resize();

    this.setState({
      isOpen: isOpen,
    });

    this.container.style.height =
      (isOpen ? this.openHeight : this.closeHeight) + 'px';
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
        <p className="auto-height-fix">
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
            {paragraphs}
          </div>
        </div>
        {this.state.isOpen
          ? <a className="btn-underline" onClick={this.close.bind(this)}>
              Read less
            </a>
          : <a className="btn-underline" onClick={this.open.bind(this)}>
              Read more
            </a>}
      </div>
    );
  }
}

export default ReadMore;
