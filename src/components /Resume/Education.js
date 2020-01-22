import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function EducationPage() {
  return (
    <Card className="EducationCard">
      <CardBody className="EducationBody">
        <CardTitle><h3>Education</h3></CardTitle>
        <br></br>
        <CardSubtitle>Last Updated: January 2020</CardSubtitle>
        <br></br>
        <p>
          <b>Front-End Development Certification</b>
          <br></br>
          Kenzie Academy | 10/2019
        </p>
        <p>
          <b>Back-End Development Certification</b>
          <br></br>
          Kenzie Academy | 04/2020
        </p>
        <p>
          <b>Full Stack Developer Certification</b>
          <br></br>
          Kenzie Academy | 04/2020
        </p>
        <p>
          <b>Salesforce Buisness Admin Certification</b>
          <br></br>
          Salesforce | Currently Working on obtaining
        </p>
      </CardBody>
    </Card>
  );
}
