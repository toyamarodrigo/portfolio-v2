import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import profile from './profile.json';

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
      about: {
        title: 'About me',
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
    const { about, contact } = this.state;
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
                  title={profile.basics.name}
                  subtitle={profile.basics.subtitle}
                  profile={profile}
                />
              )}
            />
            <Route
              path="/about"
              render={() => <AboutPage title={about.title} profile={profile} />}
            />
            <Route
              path="/projects"
              render={() => (
                <ProjectsPage
                  profile={profile}
                  title={profile.basics.pages.projects.title}
                />
              )}
            />
            <Route
              path="/contact"
              render={() => (
                <ContactPage title={contact.title} profile={profile} />
              )}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
