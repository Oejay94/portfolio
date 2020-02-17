import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function ProjectsPage() {
  return (
    <Card className="ProjectsCard">
      <CardBody className="ProjectsCardBody">
        <CardTitle>
          <h3>Projects</h3>
        </CardTitle>
        <br></br>
        <CardSubtitle>Last Updates: February 2020</CardSubtitle>
        <br></br>
        <p>
          Todo List (React) | Solo
          <br></br>
          <ul>
            <li>
              This is a rather simple todo list that was created using React
              and Redux. A user can add items to do, click on the complete button,
              clear all completed list items, and toggle between active and completed
              items.
            </li>
            <li>Status: Completed</li>
            <li><a href='https://todo-react-project.herokuapp.com'>Check out the finished project!</a></li>
          </ul>
        </p>
      </CardBody>
    </Card>
  );
}