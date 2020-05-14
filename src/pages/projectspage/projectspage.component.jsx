import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';

import CardItem from '../../components/card-item/card-item.component';
import CardList from '../../components/card-list/card-list.component';
import { Row } from 'react-bootstrap';

import Footer from '../../components/footer/footer.component';

import './projectspage.styles.scss';

const ProjectsPage = ({ profile, title }) => (
  <div className="projectspage landing">
    <ContentContainer className="py-0">
      <div className="title-container">
        <h1 className="text-center title">{title}</h1>
      </div>
      <Row class="justify-content-center">
        <hr class="separator" />
      </Row>
    </ContentContainer>
    <CardList>
      <CardItem profile={profile} />
    </CardList>
    <Footer profile={profile} />
  </div>
);

export default ProjectsPage;
