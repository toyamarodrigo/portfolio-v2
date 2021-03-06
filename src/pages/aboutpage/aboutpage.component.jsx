import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import Form from '../../components/form/form.component';

import './aboutpage.styles.scss';
import { Card, Container, Col, Row } from 'react-bootstrap';

const AboutPage = ({ title, profile }) => (
  <div className="aboutpage landing">
    <ContentContainer>
      <div className="title-container">
        <h1 className="text-center about-title">{title.aboutTitle}</h1>
        <Row className="justify-content-center">
          <hr className="separator" />
        </Row>
      </div>
    </ContentContainer>

    <Container>
      <Row className="justify-content-center align-items-center pt-5">
        <Col md={6} lg={3} className="text-center">
          <img
            src={require('../../assets/avatar-min.jpeg')}
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
              things as well as solving real-world problems.
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
        <Col xs={12} lg={6} className="text-center">
          <img
            src={require('../../assets/goals-image1.jpg')}
            alt=""
            className="goal-img"
          />
        </Col>
        <Col xs={12} lg={5}>
          <Card.Body className="text-white about-me">
            <Card.Text>
              My goal is to provide high-quality work to clients no matter if
              the project is small or of high complexity.
            </Card.Text>
            <Card.Text>
              I entered the world of Software development because I realized
              that I can make an impact on people by just using my imagination
              and passion when building applications.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row className="flex-row-reverse justify-content-center align-items-center">
        <Col xs={12} lg={5} className="text-center">
          <img
            src={require('../../assets/goals-image2.jpg')}
            alt=""
            className="goal-img"
          />
        </Col>
        <Col xs={12} lg={6}>
          <Card.Body className="text-white about-me">
            <Card.Text>
              By 2018, I thought it would be a good idea to start
              documenting/blogging my journey of becoming a developer to inspire
              others as well as keep myself accountable. So I started my
              Instagram
              <a href="https://www.instagram.com/rt.codes/" className="ig-link">
                {' '}
                @rt.codes{' '}
              </a>
              talking about the progress I was making and what concepts I was
              currently learning.
            </Card.Text>
            <Card.Text>
              I also did a bunch of Personal projects with the knowledge I
              gathered from courses and the Internet. Check them out on the button
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

    <Form />

    <Footer profile={profile} />
  </div>
);

export default AboutPage;
