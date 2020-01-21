import React, { Component } from "react";
import About from "./About";
import Jobs from "./Jobs";
// import Pic from "./Pic";
// import Nav from "../Nav";
import { Card, CardBody, Navbar } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Card>
            <CardBody>
              <h1 align="center">Joseph Brown</h1>
              <hr></hr>
              <p align="center">
                joseph.d.brown94@gmail.com
                <a className="link" href="https://github.com/Oejay94">
                  Github Page
                </a>
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
        <Navbar></Navbar>
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
