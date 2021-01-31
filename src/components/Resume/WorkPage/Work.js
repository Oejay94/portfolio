import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import "./work.css";

function WorkPage() {
  return (
    <>
    <Card.Header as="h3">Work</Card.Header>
      <CardColumns className='column'>
        <Card>
          <Card.Body>
            <Card.Title>Jr. Software Engineer Instructor</Card.Title>
            <Card.Subtitle>
              Kenzie Academy | Indianapolis | 07/2020-Present
            </Card.Subtitle>
            <Card.Text>
              <ul>
                <div className="workDiv">
                  <li>
                    Worked on a team of 3 to instruct a chorot of 100 students
                    across the country.
                  </li>
                  <li>
                    Cohort was divided into 2 blocks, my block of students
                    contained 55 out of the 100 students.
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
                    topics that students were struggling which were done either
                    as 1-1 or in front of my entire block of students.
                  </li>
                  <li>
                    Daily tasks consisted of grading, attendance taking, daily
                    stand-ups, debugging, and as well code reviews.
                  </li>
                  <li>
                    Received feedback from students and engaged in curriculum
                    planning for the coming weeks.
                  </li>
                </div>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
      <CardColumns className='column2'>
        <Card>
          <Card.Body>
            <Card.Title>Software Engineer Internship</Card.Title>
            <Card.Subtitle>
              Docket | Indianapolis | 06/2020-07/2020
            </Card.Subtitle>
            <Card.Text>
              <ul>
                <div className="workDiv">
                  <li>
                    Collaborated with the full time Software Engineering team
                    while working entirely remote.
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
                    By the end of the internship, Docket was able to grab links
                    from BlueJeans, GoToMeetings, Microsoft Teams, and more
                    where as before they were only able to grab Zoom and Google
                    Hangout links.
                  </li>
                  <li>
                    Internship was done concurrent with Package Handling job at
                    UPS and Coaching job.
                  </li>
                </div>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
      <CardColumns className='column3'>
        <Card>
          <Card.Body>
            <Card.Title>Software Engineer Coach</Card.Title>

            <Card.Subtitle>
              Kenzie Academy | Indianapolis | 06/2019-07/2020
            </Card.Subtitle>

            <Card.Text>
              <ul>
                <div className="workDiv">
                  <li>
                    Mentor students of newest cohorts on understanding the
                    material in the school curriculum.
                  </li>

                  <li>
                    Help guide students on best practices and techniques to
                    accomplish requirements for the assessments with clean and
                    readable code.
                  </li>

                  <li>
                    Worked both with in person and remote students with the same
                    level of instructions and focus.
                  </li>

                  <li>
                    Graded assessments submitted by the students in the cohort
                    based on assessment requirements
                  </li>
                </div>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </>
  );
}

export default WorkPage;
