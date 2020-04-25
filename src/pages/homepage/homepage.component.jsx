import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="landing d-flex align-items-center">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Hi, I'm Rodrigo</h1>
            <h3>
              <span className="type"></span>
            </h3>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <hr className="separator" />
        </Row>

        <Container>
          <Row>
            <Col>
              <ul className="connect-list">
                <li>
                  <a
                    className="connect-icon file"
                    href="https://github.com/toyamarodrigo"
                    aria-label="CV"
                  >
                    <i className="fa fa-file-text cv"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="connect-icon linkedin"
                    href="https://www.linkedin.com/in/rodrigo-toyama-1861b1154/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="connect-icon github"
                    href="https://github.com/toyamarodrigo"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a className="connect-icon" href="#Contact" aria-label="Mail">
                    <i className="fa fa-envelope-square mail"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <a className="btn-landing btn-slide" href="#Projects">
                View My Projects
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  </div>
);

export default HomePage;
