import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';
import CodeOfConduct from '../../pages/CodeOfConduct';
import FontLoader from '../../utils/FontLoader';
import { isStaging } from '../../utils/Browser';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    FontLoader.load();
  }
  render() {
    return (
      <Router basename={isStaging() ? '/website-2017' : '/'}>
        <div className="app">
          <Header />
          <div className="app-body">
            <Route exact path="/" component={Home} />
            <Route path="/codeofconduct" component={CodeOfConduct} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
