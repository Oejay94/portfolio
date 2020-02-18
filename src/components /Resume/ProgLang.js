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
        <CardSubtitle>Last Updated: January 2020</CardSubtitle>
        <br></br>
        <p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Python</li>
          </ul>
        </p>
      </CardBody>
    </Card>
  );
}