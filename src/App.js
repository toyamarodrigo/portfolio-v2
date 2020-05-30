import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import profile from './profile.json';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import ProjectsPage from './pages/projectspage/projectspage.component';
import ContactPage from './pages/contactpage/contactpage.component';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: {
        aboutTitle: 'About me',
        projectsTitle: 'Projects page',
        ContactTitle: 'Contact page',
      },
    };
  }

  render() {
    const { titles } = this.state;
    return (
      <Router basename={process.env.PUBLIC_URL}>
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
              render={() => <AboutPage title={titles} profile={profile} />}
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
                <ContactPage
                  title={titles}
                  profile={profile}
                />
              )}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

export default App;
