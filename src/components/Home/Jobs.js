import React from "react";
import { Card, CardBody, CardTitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function JobPage() {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h3>Current Job</h3>
        </CardTitle>

        <p>
          <b>Position:</b> Jr Instructor at Kenzie Acadmey
        </p>
      </CardBody>
    </Card>
  );
}
