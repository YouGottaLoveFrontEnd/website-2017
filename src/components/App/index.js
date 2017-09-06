import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';
import CodeOfConduct from '../../pages/CodeOfConduct';
import About from '../../pages/About';
import Menu from '../../components/Menu';
import Speakers from '../../pages/Speakers';
import Workshops from '../../pages/Workshops';
import Sponsors from '../../pages/Sponsors';
import Schedule from '../../pages/Schedule';
import FontLoader from '../../utils/FontLoader';
import { isStaging } from '../../utils/Environment';
import ScrollToTop from '../ScrollToTop';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    FontLoader.load();

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.appLayout = ReactDOM.findDOMNode(this.refs.appLayout);
  }

  toggleMenu(isOpen) {
    this.setState({
      isOpen: isOpen,
    });

    this.appLayout.style = isOpen
      ? 'transform: scale(1.05)'
      : 'transform: scale(1)';
  }

  render() {
    return (
      <Router basename={isStaging() ? '/website-2017' : '/'}>
        <ScrollToTop>
          <div className="app" ref="app">
            <Menu
              isOpen={this.state.isOpen}
              toggleMenu={this.toggleMenu.bind(this)}
            />
            <div className="app-layout" ref="appLayout">
              <Header toggleMenu={this.toggleMenu.bind(this)} />
              <div className="app-body">
                <Route exact path="/" component={Home} />
                <Route path="/codeofconduct" component={CodeOfConduct} />
                <Route path="/about" component={About} />
                <Route path="/speakers" component={Speakers} />
                <Route path="/workshops" component={Workshops} />
                <Route path="/sponsors" component={Sponsors} />
                <Route path="/schedule" component={Schedule} />
              </div>
              <Footer />
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
