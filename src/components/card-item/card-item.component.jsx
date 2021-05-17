import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons';

import './card-item.styles.scss';

const CardItem = ({ profile }) => (
  <div>
    {profile.projects.map((project, id) => (
      <Card key={id} className="my-5 shadow">
        <Container>
          <Row
            className={`${project.classPosition} justify-content-center align-items-center`}
          >
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
                    src={require('../../assets' + url)}
                    className="project-img"
                  />
                )
              )}
            </Col>
            <Col md={12} lg={5}>
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
                          <p className="p-languages">{index}</p>
                        </li>
                      ))}
                      {[...project.libraries].map((index, k) => (
                        <li key={k}>
                          <p className="p-libraries">{index}</p>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
                <Row className="justify-content-around">
                  {project.githubUrl && (
                    <Col xs={12}>
                      <Button
                        className="mx-1 my-2 custom-btn btn-block"
                        href={project.githubUrl}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faCode} className="mr-2" />
                        code
                      </Button>
                    </Col>
                  )}
                  <Col xs={12}>
                    <Button
                      className="mx-1 custom-btn btn-block"
                      href={project.website}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faSearch} className="mr-2" />
                      view
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    ))}
  </div>
);

export default CardItem;
