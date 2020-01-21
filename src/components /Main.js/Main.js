import React, { Component } from "react";
import About from "./About";
import Jobs from "./Jobs";
import Pic from "./Pic";
import Nav from "../Nav"
import { Card, CardBody } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Card>
            <CardBody>
            <Nav></Nav>
              <h1 align="center">Joseph Brown</h1>
              <Pic align="center"></Pic>
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
        <br></br>
        <div id="bodystyle">
          <About></About>
          <Jobs></Jobs>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
