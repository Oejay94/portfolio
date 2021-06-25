import React from "react";
import Card from "react-bootstrap/Card";

import "./About.css";

export default function AboutPage() {
  return (
    <Card>
      <Card.Header as="h3">About Me</Card.Header>
      <Card.Body className="aboutPageCard">
        <Card.Text className="aboutCardText">
          My name is Joseph, but I go by Joey. I'm a certified Front End
          Developer and Full Stack Software Developer thanks to Kenzie Academy.
          My time as developer has been an exciting one and while I've learned a
          lot, I am always looking into new technologies and programming
          languages so I can build projects on my own time. In fact, one of my
          biggest goals as a developer is to create my own video game! <br />{" "}
          <br /> Some of the things I do in my spare time is reading, gaming,
          playing music, cooking, and hanging out with friends and family!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
