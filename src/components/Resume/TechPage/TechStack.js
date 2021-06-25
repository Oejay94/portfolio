import React from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Icon } from "semantic-ui-react";

function TechStack() {
  return (
    <Container fluid>
      <Card.Header as="h3">Technologies</Card.Header>
      <Row xs sm md lg xl>
        <Col xs sm md lg xl>
          <h3>
            React.js <Icon name="react" />
          </h3>
          <br />
          <h3>
            Redux <Icon name="react" />
          </h3>
          <br />
          <h3>
            Django <Icon name="python" />
          </h3>
          <br />
          <h3>
            {" "}
            PostgreSQL <Icon name="database" />
          </h3>
          <br />
          <h3>
            Google Firebase <Icon name="google" />
          </h3>
          <br />
          <h3>
            Bootstrap <Icon name="edit" />
          </h3>
          <br />
          <h3>
            Semantic UI <Icon name="paint brush" />
          </h3>
          <br />
        </Col>
        <Col xs sm md lg xl>
          <h3>
            Heroku <Icon name="upload" />
          </h3>
          <br />
          <h3>
            Docker <Icon name="docker" />
          </h3>
          <br />
          <h3>
            Git <Icon name="git square" />
          </h3>
          <br />
          <h3>
            Github <Icon name="github square" />
          </h3>
          <br />
          <h3>
            Slack <Icon name="slack" />
          </h3>
          <br />
          <h3>
            Zoom <Icon name="video" />
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default TechStack;
