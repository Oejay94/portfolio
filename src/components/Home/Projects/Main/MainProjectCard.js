import React from "react";

import ToDoApp from "../ToDoApp/ToDoApp";
import DirWatcherApp from "../DirWatcherApp/DirWatcherApp";
import ConsoleCalApp from "../ConsoleCalApp/ConsoleCalApp";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

import './style.css'

function MainProjectCard() {
  return (
    <Container fluid>
      <Card.Header as='h3'>Projects</Card.Header>
      <Row xs={1} md={3}>
        <Col>
          <ToDoApp />
        </Col>
        <Col>
          <DirWatcherApp />
        </Col>
        <Col>
          <ConsoleCalApp />
        </Col>
      </Row>
    </Container>
  );
}

export default MainProjectCard;