import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function WorkPage() {
  return (
    <Card className="WorkCard">
      <CardBody className="WordCardBody">
        <CardTitle>
          <h3>Work</h3>
        </CardTitle>
        <br></br>
        <CardSubtitle>Last Updated: April 2020</CardSubtitle>
        <br></br>
        <p>
          <strong>Coaching</strong>
          <br></br>
          Kenzie Academy | Indianapolis | 06/2019-Present
          <ul>
            <li>
            Mentor students of newest cohorts on understanding the material in the school curriculum.
            </li>
            <li>
            Help guide students on best practices and techniques to accomplish requirements for the assessments with clean and readable code.
            </li>
            <li>
            Worked both with in person and remote students with the same level of instructions and focus.
            </li>
            <li>
              {" "}
              Graded assessments submitted by the students in the cohort based on assessment requirements
            </li>
          </ul>
        </p>
        <p>
          <strong>UPS Package Handler</strong>
          <br></br>
          UPS Hub on 81st and Zionsville Rd, Indianapolis | 10/2019-Present
          <ul>
            <li>
              Worked in various trailer to load packages within said trailers in
              order to get the packages to their destination
            </li>
            <li>
              Ability to adapt and overcome unforeseen obstacles during stressful
              time and/or when high demands need to be met
            </li>
          </ul>
        </p>
        <p>
          <strong>US Army Reserves 11B Infantry</strong>
          <br></br>
          Fort Benning, Georgia & Warsaw, Indiana | 09/2011-10/2016
          <br />
          <br />
          Training Locations
          <ul>
            <li>
              Basic Combat Training took place during the summer of 2012 at Fort
              Benning, Georgia
            </li>
            <li>
              Infantry School/Training tool place during the summer of 2013 at
              Fort Benning, Georgia
            </li>
            <li>
              Unit stationed mostly in Warsaw, Indiana with some training taking
              place at Camp Atterbury
            </li>
          </ul>
          Military Skills Highlight
          <ul>
            <li>Weapon safety</li>
            <li>Security clearance</li>
            <li>Fair and precise judgement</li>
            <li>Good critical thinking skills</li>
            <li>Self discipline under stress</li>
          </ul>
        </p>
         <p>
          <strong>Alimar Security Supervisor/Guard</strong>
          <br></br>
          Indianapolis | Sep 2017-Jan 2019, Sep 2015-Dec 2016
          <ui>
            <li>
              Provide outsourced security services for Fortune 500 companies
              including CVS and Genuine Parts (NAPA)
            </li>
            <li>
              Work 4-8 hour shifts providing visual presence to deter theft
            </li>
            <li>
              Ensure adherence to Alimar and Alimar’s customer policies and
              procedures
            </li>
            <li>
              Support customer requirements by providing customer service on an
              as-needed basis
            </li>
            <li>
              Handled over 50 escalations and incidents independently or in
              collaboration with store management. Approximately 25 escalations
              required police assistance due to the nature of the incident and
              location of the stores
            </li>
            <li>
              Provided armed services approximately 25% of tenure during night
              shifts and in a supervisory role
            </li>
            <li>
              As a Supervisor, provided oversight and management for 12-16
              security guard employees across 16 customer sites.
            </li>
            <li>
              Performed site checks across multiples sites to oversee employees,
              planned and ensured shift coverage, filled in to ensure shift
              coverage when needed, provided employee management support and
              On-Call 24x7
            </li>
          </ui>
        </p>
        {/* <p>
          <strong>CVS Supervisor</strong>
          <br></br>
          Indianapolis | Jan 2017-Sept 2017
          <ui>
            <li>
              Daily supervision of 4 team members and responsible for 7 team
              members
            </li>
            <li>
              Supervised the store’s crew through assigning, directing and
              following up of all activities
            </li>
            <li>
              Handled all customer relations issues in accordance with company
              policy
            </li>
            <li>Handled incoming customer calls as the manager on-duty</li>
            <li>
              Effectively communicated information both to and from store
              management and crews
            </li>
            <li>
              Promoted a positive shopping experience for all CVS customers by
              promoting CVS customer service culture. (Greet, offer help, and
              thank)
            </li>
            <li>
              Provided storewide vendor management and stocking management
            </li>
            <li>
              Worked with on-site security personnel to manage potential
              security incidents
            </li>
            <li>Responsible for managing cash and accounting</li>
          </ui>
        </p>
        <p>
          <strong>Part and Full-Time Roles Concurrent with Military</strong>
          <br></br>
          Indianapolis | Sept 2013-Sept 2015
          <ul>
            <li>
              Logistics - Full and part-time roles logistics/warehouse roles
              picking and packing
            </li>
            <li>
              Papa John’s Pizza Delivery - Evening and weekend pizza delivery
            </li>
          </ul>
        </p> */}
      </CardBody>
    </Card>
  );
}
