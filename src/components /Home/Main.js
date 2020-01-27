import React, { Component } from "react";
import About from "./About";
import Jobs from "./Jobs";
import Nav from "../Nav";
import Footer from "../Footer";
import Carousel from "../Carousel";
import { Header, Divider, Icon, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Home extends Component {
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
              <Icon name="github" color="black" />
              Github Page
            </a>
            <br></br>
            <a
              className="link"
              href="https://www.linkedin.com/in/joseph-brown-8a9312166/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" color="black" />
              Linkedin Page
            </a>
          </p>
          <br></br>
        </Header>
        <Card.Group className="MainCardGroup">
          <Card fluid className="AboutCard">
            <About></About>
          </Card>
          <Card fluid className="JobsCard">
            <Jobs></Jobs>
          </Card>
        </Card.Group>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Home;