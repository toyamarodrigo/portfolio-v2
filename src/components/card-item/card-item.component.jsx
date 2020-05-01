import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';

import './card-item.styles.scss';

const CardItem = ({
  id,
  title,
  subtitle,
  urlImg,
  description,
  classPosition,
}) => (
  <Card key={id} className="my-5">
    <Row className={classPosition}>
      <Col sm={12} lg={7}>
        <Card.Img variant="left" src={urlImg} className="project-img" />
      </Col>
      <Col md={12} lg={5} className="d-flex align-items-center">
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Subtitle>{subtitle}</Card.Subtitle>
              <Container>
                <ul className="d-inline-flex used-tech">
                  <li>
                    <p>HTML</p>
                  </li>
                  <li>
                    <p>CSS</p>
                  </li>
                  <li>
                    <p>Javascript</p>
                  </li>
                </ul>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary">code</Button>
              <Button variant="primary">view</Button>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);

export default CardItem;
