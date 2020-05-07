import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';
import Footer from '../../components/footer/footer.component';

import { Button, Container, Col, Row } from 'react-bootstrap';
import './contactpage.styles.scss';

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
      <div class="row justify-content-center">
        <hr class="separator" />
      </div>
      <h5 class="text-center text-white mt-4">
        Let's work together to create game-changing experiences.
      </h5>

      <div class="row pt-3 justify-content-center">
        <form
          class="col-lg-6 pt-3 text-center"
          method="post"
          onSubmit={onSubmit}
        >
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-4"
              placeholder="Name"
              onChange={name}
            />
            <input
              type="email"
              class="form-control mb-4"
              id="Email"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={mail}
            />
            <div class="form-group">
              <textarea
                class="form-control"
                id="TextArea"
                rows="3"
                placeholder="Message"
                onChange={message}
              ></textarea>
              <small
                id="emailHelp"
                class="form-text text-muted text-center mt-3"
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
      </div>
    </section>

    <Footer profile={profile} />
  </div>
);

export default ContactPage;
