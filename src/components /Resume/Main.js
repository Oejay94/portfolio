import React, { Component } from "react";
import Nav from "../Nav";
import ProgLang from "./ProgLang";
import Projects from "./Projects";
import Work from "./Work";
import Education from "./Education";
import Tech from "./Tech";
import Footer from "../Footer";
import Carousel from "../Carousel"
import { Card, Image, Header, Divider, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
              <Nav></Nav>
              <Divider horizontal>
            <h2>Joseph Brown</h2>
          </Divider>
              <Carousel></Carousel>
              <p align="center">
                <br></br>
                <a
                  className="link"
                  href="https://github.com/Oejay94"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name='github' color='black' />
                  Github Page
                </a>
                <br></br>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/joseph-brown-8a9312166/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name='linkedin' color='black' />
                  Linkedin Page
                </a>
              </p>
        </Header>
          <Card.Group className="ResumeCardGroup">
              <Card fluid className="EducationCard">
                <Education></Education>
              </Card>
              <Card fluid className="WorkCard">
                <Work></Work>
              </Card>
              <Card fluid className="ProjectsCard">
                <Projects></Projects>
              </Card>
              <Card fluid className="ProgLangCard">
                <ProgLang></ProgLang>
              </Card>
              <Card fluid className="TechCard">
                <Tech></Tech>
              </Card>
          </Card.Group>
          <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Resume;
