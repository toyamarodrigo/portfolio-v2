import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './content-container.styles.scss';

const ContentContainer = (props) => (
  <Container fluid={true}>
    <Row className="justify-content-center">
      <Col md={8} lg={10}>
        {props.children}
      </Col>
    </Row>
  </Container>
);

export default ContentContainer;
