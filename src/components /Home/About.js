import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function AboutPage() {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h3>About Me!</h3>
        </CardTitle>
        <br></br>
        <CardSubtitle>Last Updated: September 2020</CardSubtitle>
        <br></br>
        <p>
          My name is Joseph, but I go by Joey. I'm a certified Front End
          Developer and I am a Full Stack Software Developer thanks to Kenzie
          Academy. <br></br> My time as developer has been an exciting one and while I've
          learned a lot, <br></br> I am always looking into new technologies and
          programming languages to learn so I can build new projects on my own
          time. <br></br> In fact, one of my biggest goals as a developer is to create my
          own video game!
        </p>
        <p>
          Some of the things I do in my spare time is reading, gaming, playing
          music, cooking, and hanging out with friends and family!
        </p>
      </CardBody>
    </Card>
  );
}
