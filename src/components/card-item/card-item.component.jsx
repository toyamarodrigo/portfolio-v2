import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

import './card-item.styles.scss';

const CardItem = ({ profile }) => (
  <div>
    {profile.projects.map((project, id) => (
      <Card key={id} className="my-5">
        <Row className={project.classPosition}>
          <Col sm={12} lg={7}>
            {[...project.images].map(
              ({
                resolutions: {
                  micro: { url },
                },
                resolutions: {
                  micro: { id },
                },
              }) => (
                <Card.Img
                  key={id}
                  variant="left"
                  src={url}
                  className="project-img"
                />
              )
            )}
          </Col>
          <Col md={12} lg={5} className="d-flex align-items-center">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.summary}</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col className="used-tech-container">
                  <Card.Subtitle>{project.subtitle}</Card.Subtitle>
                  <ul className="d-inline-flex used-tech flex-wrap">
                    {[...project.languages].map((index, j) => (
                      <li key={j}>
                        <p>{index}</p>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
              <Row className="justify-content-around">
                <Button className="col-5 mx-1 custom-btn btn-block">code</Button>
                <Button className="col-5 mx-1 custom-btn btn-block">view</Button>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    ))}
  </div>
);

export default CardItem;
