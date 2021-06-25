import React from "react";
import Card from "react-bootstrap/Card";

import './currentJob.css'

function CurrentJob() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <a
              href="https://www.kenzie.academy/community/team-kenzie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jr. Software Engineer Instructor
            </a>
          </Card.Title>
          <Card.Subtitle>
            Kenzie Academy | Indianapolis | 07/2020-Present
          </Card.Subtitle>
          <br />
          <Card.Text as='div'>
            <ul>
              <li>
                Worked on a team of 3 to instruct a cohort of 100 students
                across the country.
              </li>
              <li>
                Cohort was divided into 2 blocks, my block of students contained
                55 out of the 100 students.
              </li>
              <li>
                Primary focus was mentoring and guiding students through the
                topics of HTML, CSS, Javascript, Node.js, React.js, the
                Terminal, and Git/Github
              </li>
              <li>
                Helped students overcome various technical issues in both
                Windows and Mac OS
              </li>
              <li>
                Provided coding demos and walkthroughs to better explain the
                topics that students were struggling which were done either as
                1-1 or in front of my entire block of students.
              </li>
              <li>
                Daily tasks consisted of grading, attendance taking, daily
                stand-ups, debugging, and as well code reviews.
              </li>
              <li>
                Received feedback from students and engaged in curriculum
                planning for the coming weeks.
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CurrentJob