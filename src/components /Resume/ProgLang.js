import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function ProgLangPage() {
  return (
    <Card className="ProgCard">
      <CardBody>
        <CardTitle>
          <h3>Programming Languages</h3>
        </CardTitle>
        <br></br>
        <CardSubtitle>Last Updated: September 2020</CardSubtitle>
        <br></br>
        <p>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>C# (Self Study)</li>
            <li>Ruby (Self Study)</li>
          </ul>
        </p>
      </CardBody>
    </Card>
  );
}