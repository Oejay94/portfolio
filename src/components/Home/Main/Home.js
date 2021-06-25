import React, { Component } from "react";

import About from "../About/About";
import MainProjectCard from "../Projects/Main/MainProjectCard";

import { Card } from "semantic-ui-react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './style.css'

import "semantic-ui-css/semantic.min.css";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card fluid className="AboutCard">
              <About />
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Card fluid className="ProjectCard">
              <MainProjectCard />
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>
      </Container>
    );
  }
}
export default Home;
