import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './Subscribe.css';

class Subscribe extends Component {


    subscribe() {


        // const mailchimpInstance = 'us10'
        // const listUniqueId = '4aed4f6e74'
        // const mailchimpApiKey = '8c6d4ca7feda2ef7293c83438b22b298-us10'
        // const mailChimpUrl = 'https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/'


        // var authOptions = {
        //     method: 'POST',
        //     url: mailChimpUrl,
        //     data: {
        //         "email_address": "test@ing.com",
        //         "status": "subscribed"
        //     },
        //     headers: {
        //         'Authorization': 'apiKey ' + mailchimpApiKey,
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     json: true
        // };


        // axios(authOptions)
        //     .then(function(response) {
        //         debugger
        //         console.log(response.data);
        //         console.log(response.status);
        //     })
        //     .catch(function(error) {
        //         debugger
        //         console.log(error);
        //     });


        // this.subscribeBox.classList.add('animate');

        // setTimeout(() => {
        //     this.subscribeBox.classList.add('success');
        //     this.subscribeButtonText.innerText = 'Thank you!';
        //     setTimeout(() => {
        //         this.subscribeBox.classList.remove('success');
        //         this.subscribeBox.classList.remove('animate');
        //         this.subscribeButtonText.innerText = 'OK';
        //     }, 5000);
        // }, 2000);

    }

    validate() {

        //  /^\b[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]{1,50}@[a-zA-Z0-9-]{1,50}(?:\.[a-zA-Z0-9-]{2,20})+$/

    }

    componentDidMount() {
        this.emailInput = ReactDOM.findDOMNode(this.refs.emailInput);
        this.validEmailMessage = ReactDOM.findDOMNode(this.refs.validEmailMessage);
        this.subscribeBox = ReactDOM.findDOMNode(this.refs.subscribeBox);
        this.subscribeButtonText = ReactDOM.findDOMNode(this.refs.subscribeButtonText);
    }


    render() {
        return (
            <form action="//yougottalovefrontend.us12.list-manage.com/subscribe/post?u=eb813afeee84a103f1c1bde69&id=1f964c4ab3" method="post" className="subscribe-form">
                <div className="subscribe" ref="subscribeBox">
                    <input ref="emailInput" type="email" name="EMAIL" placeholder="Enter Your email address" onChange={this.validate.bind(this)} required />
                    <button type="submit" name="subscribe">
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        <span ref="subscribeButtonText">OK</span>
                    </button>
                </div>
            </form>
        ); // <span ref="validEmailMessage">Please fill in a valid email address</span>
    }
}

export default Subscribe;
