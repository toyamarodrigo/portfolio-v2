import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Typed from 'react-typed';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage transition-item">
    <div className="landing d-flex align-items-center">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center title">Rodrigo Toyama</h1>
            <h3 className="text-center subtitle-typed">
              <Typed
                strings={['^300 Front-end Developer^1000', '^400 Maker^1000']}
                typeSpeed={100}
                backSpeed={40}
                loop
              />
            </h3>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <hr className="separator" />
        </Row>

        <Row className="justify-content-center">
          <ul className="connect-list">
            <li>
              <a
                className="connect-icon file"
                href="https://github.com/toyamarodrigo"
                aria-label="CV"
              >
                <FontAwesomeIcon icon={faFileAlt} className="svg-icon" />
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
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="fa fa-linkedin"
                />
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
                <FontAwesomeIcon icon={faGithub} className="svg-icon" />
              </a>
            </li>
            <li>
              <a className="connect-icon" href="#Contact" aria-label="Mail">
                <FontAwesomeIcon icon={faEnvelopeSquare} className="svg-icon" />
              </a>
            </li>
          </ul>
        </Row>

        <Container>
          <Row className="justify-content-center">
            <Col lg={4} className="text-center">
              <a className="custom-btn" href="#Projects">
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
