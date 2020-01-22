import React, { Component } from "react";
import About from "./About";
import Jobs from "./Jobs";
import Nav from "../Nav";
import Footer from "../Footer"
import { Image, Header, Divider, Card, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Main extends Component {
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
            Email:{" "}
            <a href="mailto:joseph.d.brown94@gmail.com">
              joseph.d.brown94@gmail.com{" "}
            </a>
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

export default Main;
