import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function AboutPage() {
  return (
    <Card>
      <CardBody>
        <CardTitle><h3>About</h3></CardTitle>
        <br></br>
        <CardSubtitle>Last Updated: January 2020</CardSubtitle>
        <br></br>
        <p>
          Born in Indianapolis, Indiana on July 21st, 1994
          <br></br>I am a software engineer student at Kenzie Academy
          <br></br>I have been learning how to program since 2019
        </p>
        <p>
          Some of the things I do in my spare time is reading, gaming, playing
          music, and cooking.
        </p>
      </CardBody>
    </Card>
  );
}
