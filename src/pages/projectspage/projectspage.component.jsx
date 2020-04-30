import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './projectspage.styles.scss';

const ProjectsPage = ({title}) => (
  <div className="projectspage transition-item">
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

export default ProjectsPage;
