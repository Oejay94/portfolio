import React, { Component } from "react";
import LangStack from "../ProgLang/LangStack";
import Education from "../EducationPage/Education";
import TechStack from "../TechPage/TechStack";
import MainWorkCard from "../WorkPage/Main/MainWorkCard";
import { Card } from "semantic-ui-react";

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <Card.Group className="ResumeCardGroup">
          <Card fluid className="EducationCard">
            <Education />
          </Card>
          <Card fluid>
            <MainWorkCard />
          </Card>
          <Card fluid className="ProgLangCard">
            <LangStack />
          </Card>
          <Card fluid className="TechCard">
            <TechStack />
          </Card>
        </Card.Group>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}

export default Resume;