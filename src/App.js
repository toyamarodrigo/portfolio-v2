import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: true,
    };
  }

  animationClicked() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
