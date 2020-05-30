import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';
import Footer from '../../components/footer/footer.component';
import Form from '../../components/form/form.component';

import './contactpage.styles.scss';

// TODO: arreglar el form con handleChange y submit. hacer que envie mail. firebase? node? express? php?
// ? https://medium.com/@intentionalkreative/a-simple-and-easy-contact-form-step-by-step-tutorial-react-js-1532bc025980

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
