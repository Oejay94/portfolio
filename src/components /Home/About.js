import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function AboutPage() {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h3>About Me!</h3>
        </CardTitle>
        <br></br>
        <CardSubtitle>Last Updated: January 2020</CardSubtitle>
        <br></br>
        <p>
          My name is Joseph, but I go by Joey. I'm a certified Front End
          Developer
          <br></br> and I'm working towards becoming a Full Stack Developer
          thanks to Kenzie Academy.
          <br></br> While I have definitely enjoyed my time at Kenzie, I believe
          that I am ready to begin my career
          <br></br> as a Software Engineer in the work force. Be sure to check
          out the resume section of my website
          <br></br> to see all the Kenzie Academy has taught me.
        </p>
        <p>
          Some of the things I do in my spare time is reading, gaming, playing
          music, and cooking.
          <br></br>
          Also, I like to take time out of my day to refresh my skills on
          current software languages and learn new ones as well.
        </p>
      </CardBody>
    </Card>
  );
}
