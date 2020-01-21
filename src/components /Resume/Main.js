import React, { Component } from "react";
import Nav from "../Nav";
import ProgLang from "./ProgLang";
import Projects from "./Projects";
import Work from "./Work"
import Education from "./Education";
import { Card, CardBody } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Card>
            <CardBody>
              <h1 align="center">Joseph Brown</h1>
              <hr></hr>
              <p align="center">
                Email: joseph.d.brown94@gmail.com
                <br></br>
                <a className="link" href="https://github.com/Oejay94">
                  Github Page
                </a>
                <br></br>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/joseph-brown-8a9312166/"
                >
                  Linkedin Page
                </a>
              </p>
            </CardBody>
          </Card>
        </header>
        <Nav></Nav>
        <div id="wholeThang">
          <div id="column1">
            <Education></Education>
            <Work></Work>
            <Projects></Projects>
          </div>
          <div id="column2">
            <ProgLang></ProgLang>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume
