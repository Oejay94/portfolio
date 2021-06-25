import React from "react";

import CurrentJob from "../CurrentJob/CurrentJob";
import PreviousJob from "../PreviousJobs/PreviousJob";
import SecondPreviousJob from "../PreviousJobs/SecondPreviousJob";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function MainWorkCard() {
  return (
    <Container fluid>
      <Card.Header as='h3'>Work</Card.Header>
      <Row xs={1} md={3}>
        <Col>
          <CurrentJob />
        </Col>
        <Col>
          <PreviousJob />
        </Col>
        <Col>
          <SecondPreviousJob />
        </Col>
      </Row>
    </Container>
  );
}
export default MainWorkCard;
