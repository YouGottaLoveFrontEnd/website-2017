import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';
import CodeOfConduct from '../../pages/CodeOfConduct';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="app-body">
            <Route exact path="/website-2017/" component={Home} />
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
