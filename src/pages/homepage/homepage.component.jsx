import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Typed from 'react-typed';

import ContactList from '../../components/contact-list/contact-list.component';

import './homepage.styles.scss';

const HomePage = ({ title, subtitle }) => (
  <div className="homepage transition-item">
    <div className="landing d-flex align-items-center">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center title">{title}</h1>
            <h3 className="text-center subtitle-typed">
              <Typed strings={subtitle} typeSpeed={100} backSpeed={40} loop />
            </h3>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <hr className="separator" />
        </Row>

        <Row className="justify-content-center">
          <ContactList />
        </Row>

        <Container>
          <Row className="justify-content-center">
            <Col lg={4} className="text-center">
              <Link className="custom-btn" to="/projects">
                  View My Projects
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  </div>
);

export default HomePage;
