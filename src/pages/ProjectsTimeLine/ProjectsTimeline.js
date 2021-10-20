import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import "./ProjectsTimeLine.css";
import LightSpeed from "react-reveal/LightSpeed";


import lanze from "../../assets/img/projects/lanze.netlify.app_.png";
import metro from "../../assets/img/projects/metro-tickests-booking.netlify.app_.png";
import volunteer from "../../assets/img/projects/volunteer-n.netlify.app_.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import Firebase from "../../assets/img/skills/firebase.png";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
// import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
// import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

const ProjectsTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <LightSpeed>
          <Events>
            {/* Project: lanze */}
            <LightSpeed right>
              <ImageEvent
                date="28/06/2021"
                className="text-center"
                text="lanze"
                src={lanze}
                alt="lanze"
              >
                <div className="d-flex justify-content-between flex-column mt-1">
                  <div>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="0"
                          className="p-2 text-center accordian-main"
                        >
                          Click Here To See Details
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                          <Card.Body>
                            <strong>Description:</strong> Built a MERN stack web
                            application with dynamic service section and
                            feedback section
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                              <li>
                              Login system with firebase, private routes and dashboard for admins and users. 
                              </li>
                              <li>
                              Users can order services, monitor their orderlist and give a review, delete or update the review. 

                              </li>
                              <li>
                              Admin can add services, update and delete services. 
                              </li>
                              <li>
                              Admin can add new admins and can change the status of orderlist. 
                              </li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_NODE_JS}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  NODE JS
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_MONGODB}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  MongoDB
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_REACT}
                                    alt="React"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                                  React
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={Firebase}
                                    alt="Material-UI"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                                  Firebase
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_EXPRESS}
                                    alt="Material-UI"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                                  Express JS
                                </span>
                              </li>
                            </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                      href="https://lanze.netlify.app/"
                      target="_blank"
                    >
                      SEE LIVE
                    </UrlButton>
                    <UrlButton
                      href="https://github.com/moin1223/lenze-client"
                      target="_blank"
                    >
                      CLIENT CODE
                    </UrlButton>
                    <UrlButton
                      href="https://github.com/moin1223/lenze-server"
                      target="_blank"
                    >
                      SERVER CODE
                    </UrlButton>
                  </div>
                </div>
              </ImageEvent>
            </LightSpeed>

            {/* Project:Volunteer Network */}
            <ImageEvent
              date="16/02/2021"
              className="text-center"
              text="Volunteer Network"
              src={volunteer}
              alt="Volunteer Network"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        Click Here To See Details
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> Built a MERN stack web
                          application with dynamic activities
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>
                            It is a website where volunteers can register for an event and can see their progress on this website.

                            </li>
                            <li>
                            Users and Admin can log in to this website using google. Anyone cannot go to some pages without login, which is developed by React Router. 

                            </li>
                            <li>
                              {" "}
                              There is a dashboard for admin by which admin can maintain the registration request of the users. Admin also adds a new event on this website.
                            </li>
                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_NODE_JS}
                                  alt="Node.js"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Node.js
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_MONGODB}
                                  alt="MongoDB"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                MongoDB
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={ L_BOOTSTRAP4}
                                  alt="BOOTSTRAP5"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                BOOTSTRAP5
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_CSS3}
                                  alt="Material-UI"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                CSS
                              </span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href="https://volunteer-n.netlify.app/"
                    target="_blank"
                  >
                    See Live
                  </UrlButton>
                  <UrlButton
                      href="https://github.com/moin1223/volunteer-network-client"
                      target="_blank"
                    >
                      CLIENT CODE
                    </UrlButton>
                    <UrlButton
                      href="https://github.com/moin1223/moin1223-volunteer-network-server"
                      target="_blank"
                    >
                      SERVER CODE
                    </UrlButton>
                </div>
              </div>
            </ImageEvent>

            {/* Project: metro */}
            <ImageEvent
              date="19/03/2021"
              className="text-center"
              text="metro-tickests"
              src={metro}
              alt="metro-tickests"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        Click Here To See Details
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> Built a MERN stack web
                          application with dynamic activities.
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>It was a metro railway ticket web app.</li>
                            <li>
                              {" "}
                              Buyers can purchase ticket from here. They can
                              select and see their destination in this website{" "}
                            </li>
                            <li>
                              {" "}
                              It also authenticated by firebase. Buyer can see
                              the maps from where they have to go
                            </li>
                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_HTML5}
                                  alt="HTML 5"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_CSS3}
                                  alt="CSS 3"
                                  rounded
                                  className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_GIT}
                                  alt="Github API"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                GitHub API
                              </span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href="https://metro-tickests-booking.netlify.app/"
                    target="_blank"
                  >
                    SEE LIVE
                  </UrlButton>
                  <UrlButton
                      href="https://github.com/moin1223/metro-tickets"
                      target="_blank"
                    >
                      Source Code
                    </UrlButton>
                </div>
              </div>
            </ImageEvent>

           
            {/* Project: RoboFriends */}
          </Events>
        </LightSpeed>
      </Timeline>
    </div>
  );
};

export default ProjectsTimeline;
