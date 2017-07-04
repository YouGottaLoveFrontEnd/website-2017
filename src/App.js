import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Details from './Details';
import CodeOfConduct from './CodeOfConduct';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  constructor(props) {

      super(props);
    
      window.Typekit.load({
          async: true
      })

  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="app-body">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/speakers" component={Speakers}/>
            <Route path="/sponsors" component={Sponsors}/>
            <Route path="/details" component={Details}/>
            <Route path="/codeofconduct" component={CodeOfConduct}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
