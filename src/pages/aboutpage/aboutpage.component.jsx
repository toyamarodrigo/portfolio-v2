import React from 'react';

import { Container, Row, Col} from 'react-bootstrap';

import './aboutpage.styles.scss';

const AboutPage = () => (
  <div className="aboutpage transition-item">
    <div className="landing d-flex align-items-center">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center title">About page</h1>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default AboutPage;
