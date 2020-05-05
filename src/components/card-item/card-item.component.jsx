import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons';

import './card-item.styles.scss';

const CardItem = ({ profile }) => (
  <div>
    {profile.projects.map((project, id) => (
      <Card key={id} className="my-5">
        <Row className={`${project.classPosition} justify-content-center align-items-center`}>
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
                        <p  className="p-libraries">{index}</p>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
              <Row className="justify-content-around">
                <Button className="col-5 mx-1 custom-btn btn-block" href={project.githubUrl}>
                  <FontAwesomeIcon icon={faCode} className="mr-2"/>
                  code
                </Button>
                <Button className="col-5 mx-1 custom-btn btn-block" href={project.website}>
                <FontAwesomeIcon icon={faSearch} className="mr-2"/>
                  view
                </Button>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    ))}
  </div>
);

export default CardItem;
