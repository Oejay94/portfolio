import React from "react";
import { Card, CardBody, CardTitle} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function JobPage() {
    return (
        <Card id="JobCard">
            <CardBody id="JobCardBody">
                <CardTitle>Searching for a job</CardTitle>
                <p></p>
            </CardBody>
        </Card>
    );
}