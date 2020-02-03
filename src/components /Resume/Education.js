import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function EducationPage() {
  return (
    <Card className="EducationCard">
      <CardBody className="EducationBody">
        <CardTitle>
          <h3>Education</h3>
        </CardTitle>
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
          Kenzie Academy | 04/2020 *Currently Obtaining*
        </p>
        <p>
          <b>Full Stack Developer Certification</b>
          <br></br>
          Kenzie Academy | 04/2020 *Currently Obtaining*
        </p>
        <p>
          <b>Salesforce Buisness Admin Certification</b>
          <br></br>
          Salesforce | Online Portion Completed on 01/31/2020 | In Person Class Scheduled for 04/20-04/25 2020 | Exam Date TBD 
        </p>
      </CardBody>
    </Card>
  );
}