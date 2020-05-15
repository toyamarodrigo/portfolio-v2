import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';
import Footer from '../../components/footer/footer.component';

import { Button, Container, Col, Row } from 'react-bootstrap';
import './contactpage.styles.scss';

// TODO: arreglar el form con handleChange y submit. hacer que envie mail. firebase? node? express? php?
// ? https://medium.com/@intentionalkreative/a-simple-and-easy-contact-form-step-by-step-tutorial-react-js-1532bc025980

const ContactPage = ({
  title,
  profile,
  name,
  mail,
  message,
  onChange,
  onSubmit,
}) => (
  <div className="contactpage landing">
    <ContentContainer>
      <div className="title-container">
        <h1 className="text-center title">{title}</h1>
      </div>
    </ContentContainer>

    <section id="Contact">
      <Row className="m-0 justify-content-center">
        <hr className="separator" />
      </Row>
      <Row className="pt-3 m-0 justify-content-center">
        <Col xs={12}>
          <h5 className="text-center text-white mt-4">
            Let's work together to create game-changing experiences.
          </h5>
        </Col>
        <Col xs={12} md={8} lg={4}>
          <form className="pt-3 text-center" method="post" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="name"
                className="form-control mb-4"
                placeholder="Name"
                onChange={onChange}
              />
              <input
                type="email"
                className="form-control mb-4"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={onChange}
              />
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="TextArea"
                  rows="3"
                  placeholder="Message"
                  onChange={onChange}
                ></textarea>
                <small
                  id="emailHelp"
                  className="form-text text-muted text-center mt-3"
                >
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <Container className="py-4 view-project-btn-container">
              <Row className="justify-content-center">
                <Col lg={4} className="text-center">
                  <Button type="submit" className="custom-btn">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Container>
          </form>
        </Col>
      </Row>
    </section>

    <Footer profile={profile} />
  </div>
);

export default ContactPage;
