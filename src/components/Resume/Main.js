import React, { Component } from "react";
import ProgLang from "./ProgLang/ProgLang";
import Work from "./WorkPage/Work";
import Education from "./EducationPage/Education";
import Tech from "./TechPage/Tech";
import { Card } from "semantic-ui-react";
import './Main.css'
import "semantic-ui-css/semantic.min.css";

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <Card.Group className="ResumeCardGroup">
          <Card fluid className="EducationCard">
            <Education />
          </Card>
          <Card fluid className="WorkCard">
            <Work />
          </Card>
          <Card fluid className="ProgLangCard">
            <ProgLang />
          </Card>
          <Card fluid className="TechCard">
            <Tech />
          </Card>
        </Card.Group>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}

export default Resume;