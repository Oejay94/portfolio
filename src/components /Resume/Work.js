import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function WorkPage() {
  return (
    <Card className="WorkCard">
      <CardBody className="WordCardBody">
        <CardTitle><h3>Work</h3></CardTitle>
        <br></br>
        <CardSubtitle>Last Updated: January 2020</CardSubtitle>
        <br></br>
        <p>
          <strong>Coaching</strong>
          <br></br>
          Kenzie Academy | Indinanapolis | 06/2019-Present
          <ul>
            <li>
              Mentor students of newest cohorts on understanding the material in
              the school curriculm.
            </li>
            <li>
              Help guide students on best practices and techniques to accomplish
              requirements for the assessments with readable code.
            </li>
            <li>
              Wokred both with in person and remote students with the same level
              of insctructions.
            </li>
            <li> Graded assessments submitted by the students in the cohort</li>
          </ul>
        </p>
        <p>
          <strong>UPS Package Handler</strong>
          <br></br>
          UPS Hub on 81st and Zionsville Rd, Indinanapolis | 10/2019
          <ul>
            <li>
              Wokred in various trailer to load packages within said trailers in
              order to get the packages to their destination
            </li>
          </ul>
        </p>
      </CardBody>
    </Card>
  );
}
