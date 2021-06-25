import React from "react";
import Card from "react-bootstrap/Card";

import "./previousJobs.css"

function SecondPreviousJob() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <a
              href="https://www.kenzie.academy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Engineer Coach
            </a>
          </Card.Title>

          <Card.Subtitle>
            Kenzie Academy | Indianapolis | 06/2019-07/2020
          </Card.Subtitle>
          <br />

          <Card.Text as='div'>
            <ul>
              <li>
                Mentored students from the latest cohort on understanding the
                material in the school curriculum.
              </li>

              <li>
                Guided students on best practices and techniques to accomplish
                requirements for the assessments with clean and readable code.
              </li>

              <li>
                Worked with in person and remote students with the same level of
                instructions and focus.
              </li>

              <li>
                Graded assessments submitted by the students based on assessment
                requirements
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default SecondPreviousJob;