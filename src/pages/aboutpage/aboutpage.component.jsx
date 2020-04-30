import React from 'react';

import { Container, Row, Col} from 'react-bootstrap';

import './aboutpage.styles.scss';

const AboutPage = ({title}) => (
  <div className="aboutpage transition-item">
    <div className="landing d-flex align-items-center">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center title">{title}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default AboutPage;
