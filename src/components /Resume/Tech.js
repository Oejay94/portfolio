import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function TechPage() {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h3>Technologies</h3>
        </CardTitle>
        <br></br>
        <CardSubtitle>Last Updated: January 2020</CardSubtitle>
        <br></br>
        <p>
          <ul>
            <li>Git</li>
            <li>Heroku</li>
            <li>Google Firebase</li>
            <li>React JS Library</li>
            <li>Redux Framework</li>
            <li>Django Framework</li>
            <li>Semantic UI Rect</li>
            <li>Shards React</li>
          </ul>
        </p>
      </CardBody>
    </Card>
  );
}