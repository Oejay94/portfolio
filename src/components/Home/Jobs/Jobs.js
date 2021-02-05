import React from "react";
import Card from "react-bootstrap/Card";

export default function JobPage() {
  return (
    <Card>
      <Card.Header>
        <h3>Current Job</h3>
      </Card.Header>
      <Card.Body>
        <p>
          <b>Position:</b> Jr Instructor at Kenzie Acadmey
        </p>
      </Card.Body>
    </Card>
  );
}
