import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import ProjectsPage from './pages/projectspage/projectspage.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
