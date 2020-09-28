import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function JobPage() {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h3>Current Job</h3>
        </CardTitle>
        <br></br>
        <CardSubtitle>Last Updated: September 2020</CardSubtitle>
        <br></br>
        <p>
          <b>Position:</b> Jr Instructor at Kenzie Acadmey
          <br></br>
          <b>Hours:</b> Full Time
          <br></br>
          <b>Benefits:</b> 401k, good medical/health insurance, paid time off
        </p>
      </CardBody>
    </Card>
  );
}