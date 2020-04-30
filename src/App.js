import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import ProjectsPage from './pages/projectspage/projectspage.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Rodrigo Toyama',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Rodrigo Toyama',
        subtitle: ['^300 Front-end Developer^1000', '^400 Maker^1000'],
      },
      about: {
        title: 'About page',
      },
      projects: {
        title: 'Projects page',
      },
      contact: {
        title: 'Contact page',
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subtitle={this.state.home.subtitle}
                />
              )}
            />
            <Route
              exact
              path="/about"
              render={() => <AboutPage title={this.state.about.title} />}
            />
            <Route
              exact
              path="/projects"
              render={() => <ProjectsPage title={this.state.projects.title} />}
            />
            <Route
              exact
              path="/contact"
              render={() => <ProjectsPage title={this.state.contact.title} />}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
