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
      name: '',
      email: '',
      message: '',
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3000/contact', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'success') {
          alert('Message Sent.');
          this.resetForm();
        } else if (response.status === 'fail') {
          alert('Message failed to send.');
        }
      });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    const { name, mail, message, about, contact } = this.state;
    return (
      <Router basename="/">
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
                <ContactPage
                  title={contact.title}
                  profile={profile}
                  name={name}
                  mail={mail}
                  message={message}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
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
