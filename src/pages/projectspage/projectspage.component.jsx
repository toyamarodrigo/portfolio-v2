import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';
import CardList from '../../components/card-list/card-list.component';
import Footer from '../../components/footer/footer.component';
import { Container } from 'react-bootstrap';

import './projectspage.styles.scss';

const ProjectsPage = ({ title }) => (
  <div className="projectspage landing">
    <ContentContainer className="py-0">
      <div className="title-container">
        <h1 className="text-center title">{title}</h1>
      </div>
    </ContentContainer>
    <Container className="py-5">
      <CardList />
    </Container>
    <Footer />
  </div>
);

export default ProjectsPage;
