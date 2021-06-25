import React from "react";
import Card from "react-bootstrap/Card";

import "./previousJobs.css"

function PreviousJob() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <a
              href="https://www.dockethq.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Engineer Internship
            </a>
          </Card.Title>
          <Card.Subtitle>Docket | Indianapolis | 06/2020-07/2020</Card.Subtitle>
          <br />
          <Card.Text as='div'>
            <ul>
              <li>
                Collaborated with the full time Software Engineering team while
                working entirely remote.
              </li>
              <li>
                Primary focus was backend development using Node.js and
                Javascript
              </li>
              <li>
                Created the process that allowed Docket to access Google
                Calendars and add the link to a virtual meeting to the users
                meeting agenda.
              </li>
              <li>
                By the end of the internship, Docket was able to grab links from
                BlueJeans, GoToMeetings, Microsoft Teams, and more where as
                before they were only able to grab Zoom and Google Hangout
                links.
              </li>
              <li>
                Internship was done concurrent with a Package Handling job at
                UPS and a Coaching job at Kenzie Academy.
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default PreviousJob;