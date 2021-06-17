import React from "react";
import Card from "react-bootstrap/Card";
import toDoImg from "../../images/ToDoApp.png";
import dirWatcherImg from "../../images/DirWatcher.png";
import consoleCalImg from "../../images/ConsoleCal.png";
import "./projects.css";

export default function ProjectPage() {
  return (
    <>
      <Card.Header as="h3">Projects</Card.Header>
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
      <Card className="dirWatcherCard">
        <Card.Img
          className="dirWatcherImage"
          variant="top"
          src={dirWatcherImg}
        />
        <Card.Body>
          <Card.Title>
            <a
              href="https://github.com/Oejay94/dirwatcher"
              target="_blank"
              rel="noopener noreferrer"
            >
              DirWatcher
            </a>
          </Card.Title>
          <Card.Subtitle>Python</Card.Subtitle>
        </Card.Body>
      </Card>
      <Card className="consoleCalculatorCard">
        <Card.Img className='cSharpImage' variant='top' src={consoleCalImg} />
        <Card.Body>
          <Card.Title>
            <a
              href="https://github.com/Oejay94/Console_Calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Console Calculator
            </a>
          </Card.Title>
          <Card.Subtitle>C#</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
}