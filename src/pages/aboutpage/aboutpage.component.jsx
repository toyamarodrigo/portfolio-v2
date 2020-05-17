import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';

import './aboutpage.styles.scss';
import { Card, Container, Col, Row, Button } from 'react-bootstrap';

// TODO: ver arreglar require(IMAGEN) local y no por fuera
// TODO: Ver titulo responsive

const AboutPage = ({ title, profile }) => (
  <div className="aboutpage landing">
    <ContentContainer>
      <div className="title-container">
        <h1 className="text-center about-title">{title}</h1>
        <Row class="justify-content-center">
          <hr class="separator" />
        </Row>
      </div>
    </ContentContainer>

    <Container>
      <Row className="justify-content-center align-items-center pt-5">
        <Col md={6} lg={3} className="text-center">
          <img
            src={require('../../assets/avatar.jpeg')}
            alt=""
            className="avatar"
          />
        </Col>
        <Col xs={12} lg={7}>
          <Card.Body className="text-white about-me text-center">
            <Card.Text>
              Hi, I'm Rodrigo, an aspiring Full-Stack Developer based in
              Argentina.
            </Card.Text>
            <Card.Text>
              Passionate about Software and Web development. I love to learn new
              things as well as solving real world problems.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>

    <ContentContainer>
      <div className="subtitle-container">
        <h2 className="text-center about-subtitle">My Goal</h2>
      </div>
    </ContentContainer>

    <Container className="py-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={10} md={10} lg={6} className="text-center">
          <img
            src={require('../../assets/project-image1.jpg')}
            alt=""
            className="goal-img"
          />
        </Col>
        <Col md={10} lg={5}>
          <Card.Body className="text-white about-me">
            <Card.Text>
              My goal is to provide high quality work to clients no matter if
              the project is small or of high complexity.
            </Card.Text>
            <Card.Text>
              I entered the world of Software development because I realised
              that I can make an impact on people by just using my imagination
              and passion when building applications.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row className="flex-row-reverse justify-content-center align-items-center">
        <Col  md={10} lg={5} className="text-center">
          <img
            src={require('../../assets/project-image2.jpeg')}
            alt=""
            className="goal-img"
          />
        </Col>
        <Col md={10} lg={6}>
          <Card.Body className="text-white about-me">
            <Card.Text>
              By 2018, I thought it would be a good idea to start
              documenting/bloging my journey of becoming a developer to inspire
              others as well as keep myself acountable. So I started my
              Instagram @rt.codes talking about the progress I was making and
              what concepts I was currently learning.
            </Card.Text>
            <Card.Text>
              I also did a bunch of Personal projects with the knowledge I
              gathered from courses and Internet. Check them out on the button
              below.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>

    <Container className="py-5 view-project-btn-container">
      <Row className="justify-content-center">
        <Col lg={4} className="text-center">
          <Link className="custom-btn" to="/projects">
            View My Projects
          </Link>
        </Col>
      </Row>
    </Container>

    <section id="Contact">
      <div class="container footer-container pt-5">
        <h2 class="text-center title">Contact me</h2>

        <div class="row justify-content-center">
          <hr class="separator" />
        </div>

        <h5 class="text-center text-white mt-4">
          Let's work together to create game-changing experiences.
        </h5>

        <p class="text-center text-white pt-3">toyama.rodrigo@gmail.com</p>

        <div class="row justify-content-center">
          <form class="col-md-10 col-lg-8 pt-3 text-center">
            <div class="form-group">
              <input type="text" class="form-control mb-4" placeholder="Name" />
              <input
                type="email"
                class="form-control mb-4"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="TextArea"
                  rows="3"
                  placeholder="Message"
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
      </div>
    </section>

    <Footer profile={profile} />
  </div>
);

export default AboutPage;
