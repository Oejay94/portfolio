import React from "react";
import Card from "react-bootstrap/Card";

function EducationPage() {
  return (
    <Card className="EducationCard">
      <Card.Header as="h3">Education</Card.Header>
      <Card.Body className="EducationBody">
        <Card.Text as="h5">
          Front-End Development Certification
          <br></br>
          Kenzie Academy | 10/2019
          <br></br>
          <br></br>
          Full-Stack Development Certification
          <br></br>
          Kenzie Academy | 04/2020
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default EducationPage;
