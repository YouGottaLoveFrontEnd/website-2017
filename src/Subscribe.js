import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Subscribe.css';

class Subscribe extends Component {

    constructor(props) {

        super(props);

    }

    subscribe() {

        this.subscribeBox = ReactDOM.findDOMNode(this.refs.subscribeBox);
        this.subscribeButtonText = ReactDOM.findDOMNode(this.refs.subscribeButtonText);

        this.subscribeBox.classList.add('animate');

        setTimeout(() => {
            this.subscribeBox.classList.add('success');
            this.subscribeButtonText.innerText = 'Thank you!';
                setTimeout(() => {
                    this.subscribeBox.classList.remove('success');
                    this.subscribeBox.classList.remove('animate');
                    this.subscribeButtonText.innerText = 'OK';
                }, 5000);
        }, 2000);

    }


    render() {
        return (
            <div className="subscribe" ref="subscribeBox">
                <input type="email" placeholder="Enter Your email address" />
                <button onTouchTap={this.subscribe.bind(this)}>
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    <span ref="subscribeButtonText">OK</span>
                </button>
            </div>
        );
    }
}

export default Subscribe;
