import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Profile from "../../assets/img/profile/moin.jpg";
import "./AboutMe.css";
import Fade from "react-reveal/Fade";
import { AnimationWrapper } from 'react-hover-animation'

const AboutMe = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Fade left>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <AnimationWrapper>
                  <Image
                    className="profile justify-content-end"
                    alt="profile"
                    src={Profile}
                    thumbnail
                    fluid
                  />
                  </AnimationWrapper>
                </Row>
              </Fade>
            </Col>
            <Col xs={12} md={6}>
              <Fade right>
                <Row className=" align-items-start p-2 my-details rounded">
                  Hi there! I am <strong>&nbsp;Moin Uddin</strong>
                  <br />A passionate programmer and a Full Stack Web Developer
                  with React.js, Redux, Express.js, Node.js as my tech stack.
                  <br />
                  Proactive M.E.R.N Stack Developer seeking opportunity to bring
                  knowledge of Programming, Design, and media to Web Development
                  position with Companies.
                  <br />
                  Working with the clients, my goal is always driven towards
                  providing amazing experience with the best level of quality
                  and service to them.
                  <br />
                  Along with that, I also help people as a COACH on their
                  journey of becoming a professional programmer.
                  <br />
                  Looking for opportunities to make the best use of my skills
                  and create great products.
                  <br /> <br />
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://drive.google.com/file/d/13eICEZNrygaLlqiBfQDgog4gG94iXBeB/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="m-2" variant="outline-success">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://github.com/moin1223"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/moinuddinmoino/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutMe;
