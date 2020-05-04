import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';
import Footer from '../../components/footer/footer.component';

import './aboutpage.styles.scss';

const AboutPage = ({ title, profile }) => (
  <div className="aboutpage landing">
    <ContentContainer>
      <div className="title-container">
        <h1 className="text-center title">{title}</h1>
      </div>
    </ContentContainer>
    <Footer profile={profile} />
  </div>
);

export default AboutPage;
