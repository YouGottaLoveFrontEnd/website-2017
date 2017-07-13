import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Subscribe.css';

class Subscribe extends Component {

  componentDidMount() {
    this.emailInput = ReactDOM.findDOMNode(this.refs.emailInput);
    this.validEmailMessage = ReactDOM.findDOMNode(this.refs.validEmailMessage);
    this.subscribeBox = ReactDOM.findDOMNode(this.refs.subscribeBox);
    this.subscribeButtonText = ReactDOM.findDOMNode(
      this.refs.subscribeButtonText
    );
  }

  render() {
    return (
      <form
        action="//yougottalovefrontend.us12.list-manage.com/subscribe/post?u=eb813afeee84a103f1c1bde69&id=1f964c4ab3"
        method="post"
        className="subscribe-form"
      >
        <div className="subscribe" ref="subscribeBox">
          <input
            ref="emailInput"
            type="email"
            name="EMAIL"
            placeholder="Enter Your email address"
            required
          />
          <button type="submit" name="subscribe">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
            <span ref="subscribeButtonText">OK</span>
          </button>
        </div>
      </form>
    );
  }
}

export default Subscribe;
