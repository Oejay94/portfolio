import React from "react";

import Card from "react-bootstrap/Card";

import consoleCalImg from "../ProjectIMG/ConsoleCal.png"
import './style.css'

function ConsoleCalApp() {
  return (
    <Card className="consoleCalculatorCard">
      <Card.Img className="cSharpImage" variant="top" src={consoleCalImg} />
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
  );
}

export default ConsoleCalApp