import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Details from './Details';
import CodeOfConduct from './CodeOfConduct';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    window.Typekit.load({
      async: true,
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="app-body">
            <Route exact path="/website-2017/" component={Home} />
            <Route path="/website-2017/about" component={About} />
            <Route path="/website-2017/speakers" component={Speakers} />
            <Route path="/website-2017/sponsors" component={Sponsors} />
            <Route path="/website-2017/details" component={Details} />
            <Route
              path="/website-2017/codeofconduct"
              component={CodeOfConduct}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
