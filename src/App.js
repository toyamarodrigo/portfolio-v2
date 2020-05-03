import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import ProjectsPage from './pages/projectspage/projectspage.component';
import ContactPage from './pages/contactpage/contactpage.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Rodrigo Toyama',
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
    const { home, about, projects, contact } = this.state;
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomePage title={home.title} subtitle={home.subtitle} />
              )}
            />
            <Route
              path="/about"
              render={() => <AboutPage title={about.title} />}
            />
            <Route
              path="/projects"
              render={() => <ProjectsPage title={projects.title} />}
            />
            <Route
              path="/contact"
              render={() => <ContactPage title={contact.title} />}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
