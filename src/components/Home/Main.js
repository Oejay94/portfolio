import React, { Component } from "react";
import About from "./About/About";
import Jobs from "./Jobs/Jobs";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Card.Group className="MainCardGroup">
          <Card fluid className="AboutCard">
            <About />
          </Card>
          <Card fluid className="JobsCard">
            <Jobs />
          </Card>
        </Card.Group>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}
export default Home;
