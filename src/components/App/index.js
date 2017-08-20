import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';
import CodeOfConduct from '../../pages/CodeOfConduct';
import About from '../../pages/About';
import Menu from '../../components/Menu';
import FontLoader from '../../utils/FontLoader';
import { isStaging } from '../../utils/Environment';
import ScrollToTop from '../ScrollToTop';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    FontLoader.load();

    this.state = {
      isOpen: true,
    };
  }

  toggleMenu(isOpen) {
    this.setState({
      isOpen: isOpen,
    });
  }

  render() {
    debugger;

    return (
      <Router basename={isStaging() ? '/website-2017' : '/'}>
        <ScrollToTop>
          <div className="app">
            <Menu isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
            <Header toggleMenu={this.toggleMenu} />
            <div className="app-body">
              <Route exact path="/" component={Home} />
              <Route path="/codeofconduct" component={CodeOfConduct} />
              <Route path="/about" component={About} />
            </div>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
