import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';
import Footer from '../../components/footer/footer.component';
import Form from '../../components/form/form.component';

import './contactpage.styles.scss';

const ContactPage = ({ title, profile }) => (
  <div className="contactpage landing">
    <ContentContainer>
      <div className="title-container">
        <h1 className="text-center title">{title}</h1>
      </div>
    </ContentContainer>
    <Form />
    <Footer profile={profile} />
  </div>
);

export default ContactPage;
