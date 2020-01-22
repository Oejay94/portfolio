import React, { Component } from "react";
import Nav from "../Nav";
import ProgLang from "./ProgLang";
import Projects from "./Projects";
import Work from "./Work";
import Education from "./Education";
import { Card, Image, Header, Divider } from "semantic-ui-react";
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
              <Image
                src={require("../images/DSC_0132.jpeg")}
                style={{ display: "block", margin: "0 auto", width: "30%" }}
              />
              <p align="center">
                Email:
                <a href="mailto:joseph.d.brown94@gmail.com">
                  joseph.d.brown94@gmail.com
                </a>
                <br></br>
                <a
                  className="link"
                  href="https://github.com/Oejay94"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Page
                </a>
                <br></br>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/joseph-brown-8a9312166/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          </Card.Group>
      </React.Fragment>
    );
  }
}

export default Resume;
