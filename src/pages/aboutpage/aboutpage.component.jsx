import React from 'react';
import ContentContainer from '../../components/content-container/content-container.component';
import Footer from '../../components/footer/footer.component';

import './aboutpage.styles.scss';
import { Card, Container, Col, Row } from 'react-bootstrap';

const AboutPage = ({ title, profile }) => (
  <div className="aboutpage landing">
    <ContentContainer>
      <div className="title-container">
        <h1 className="text-center title">{title}</h1>
      </div>
    </ContentContainer>

    <Container>
      <Row className="justify-content-center align-items-center pt-5">
        <Col lg={4} className="text-center">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst2.depositphotos.com%2F1007566%2F11541%2Fv%2F950%2Fdepositphotos_115416446-stock-illustration-avatar-business-man-vector-graphic.jpg&f=1&nofb=1"
            alt=""
            className="avatar"
          />
        </Col>
        <Col lg={8}>
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
        <h2 className="text-center title">My Goal</h2>
      </div>
    </ContentContainer>

    <Container className="py-5">
      <Row>
        <Col lg={6} className="text-center">
          <img
            src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=accion-brillar-concentrarse-dedos-735911.jpg&fm=jpg"
            alt=""
            className="goal-img"
          />
        </Col>
        <Col md={12} lg={6}>
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
      <Row>
        <Col lg={6} className="text-center">
          <img
            src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?cs=srgb&dl=accion-brillar-concentrarse-dedos-735911.jpg&fm=jpg"
            alt=""
            className="goal-img"
          />
        </Col>
        <Col md={12} lg={5}>
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

    <Footer profile={profile} />
  </div>
);

export default AboutPage;
