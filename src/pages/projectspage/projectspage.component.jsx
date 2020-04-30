import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';
import Footer from '../../components/footer/footer.component';

import './projectspage.styles.scss';

const ProjectsPage = ({title}) => (
  <div className="projectspage landing">
    <ContentContainer>
      <div className="title-container">
        <h1 className="text-center title">{title}</h1>
      </div>
    </ContentContainer>
    <Footer />
  </div>
);

export default ProjectsPage;
