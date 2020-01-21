import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function ProjectsPage() {
    return (
        <Card className="ProjectsCard">
            <CardBody className="ProjectsCardBody">
                <CardTitle>Projects</CardTitle>
                <br></br>
                <CardSubtitle>Last Updates: January 2020</CardSubtitle>
                <br></br>
                <p>
                    Next Level Fitness | Group
                    <br></br>
                    <ul>
                        <li>
                           The purpose of this project was to create a Fitness App that
                           shows the user workouts they can do/complete as well as using 
                           A nutrition API that allows the user to select food they've eaten
                           and add it to their daily charts. These charts will display the 
                           workouts/food consumed the user has preformed. 
                        </li>
                        <li>
                            Improvements Needed:  
                        </li>
                    </ul>
                </p>
                <p> Kwitter(Twitter Clone)</p>
                <ul>
                    <li>Prupose</li>
                    <li>Improvements</li>
                </ul>
            </CardBody>
        </Card>
    );
}