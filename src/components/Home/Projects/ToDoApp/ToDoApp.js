import React from "react";

import Card from "react-bootstrap/Card";

import toDoImg from "../ProjectIMG/ToDoApp.png"
import './style.css';

function ToDoApp() {
  return (
    <Card className="todoCard">
      <Card.Img className="todoImage" variant="top" src={toDoImg} />
      <Card.Body>
        <Card.Title>
          <a
            href="https://todo-react-project.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Todo App
          </a>
        </Card.Title>
        <Card.Subtitle>React.js</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default ToDoApp