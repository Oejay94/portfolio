import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import { Icon } from "semantic-ui-react";

function LangStack() {
  return (
    <Container fluid>
      <Card.Header as="h3">Programming Languages</Card.Header>
      <Row xs sm md lg xl>
        <Col xs sm md lg xl>
          <h3>
            HTML5 <Icon name="html5" />
          </h3>
          <br />
          <h3>
            CSS3 <Icon name="css3" />
          </h3>
          <br />
          <h3>
            Javascript <Icon name="js" />
          </h3>
          <br />
          <h3>
            Python <Icon name="python" />
          </h3>
          <br />
          <h3>
            C# <Icon name="code" />
          </h3>
        </Col>
      </Row>
    </Container>
  );
}
export default LangStack;
