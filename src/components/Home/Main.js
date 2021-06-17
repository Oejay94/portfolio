import React, { Component } from "react";
import About from "./About/About";
import ProjectPage from "./Projects/projects";
import { Card } from "semantic-ui-react";
import "./Main.css";
import "semantic-ui-css/semantic.min.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <Card fluid className="HomeCard">
            <About />
          </Card>
          <Card fluid className="HomeCard">
            <ProjectPage />
          </Card>
          <br></br>
          <br></br>
      </React.Fragment>
    );
  }
}
export default Home;
