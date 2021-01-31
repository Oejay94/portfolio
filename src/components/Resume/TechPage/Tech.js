import React from "react";
import Card from "react-bootstrap/Card";
import { Icon } from "semantic-ui-react";
import "./tech.css";
export default function TechPage() {
  return (
    <Card className="techSkills">
      <Card.Header as="h3">Technologies</Card.Header>
      <Card.Body>
        <Card.Text as="h4">
          <div className="row">
            <div className="column">
              React.js <Icon name="react" />
              <br />
              <br />
              Redux <Icon name="react" />
              <br />
              <br />
              Django <Icon name="python" />
              <br />
              <br />
              PostgreSQL <Icon name="database" />
              <br />
              <br />
              Google Firebase <Icon name="google" />
              <br />
              <br />
              Bootstrap <Icon name="edit" />
              <br />
              <br />
              Semantic UI <Icon name="paint brush" />
              <br />
              <br />
            </div>
            <div className="column">
              Heroku <Icon name="upload" />
              <br />
              <br />
              Docker <Icon name="docker" />
              <br />
              <br />
              Git <Icon name="git square" />
              <br />
              <br />
              Github <Icon name="github square" />
              <br />
              <br />
              Slack <Icon name="slack" />
              <br />
              <br />
              Zoom <Icon name="video" />
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
