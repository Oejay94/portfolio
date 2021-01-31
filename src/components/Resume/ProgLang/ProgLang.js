import React from "react";
import Card from "react-bootstrap/Card";
import { Icon } from "semantic-ui-react";

export default function ProgLangPage() {
  return (
    <Card className="ProgCard">
      <Card.Header as="h3">Programming Languages</Card.Header>
      <Card.Body>
        <Card.Text as="h4">
          HTML5 <Icon name="html5" /> <br />
          <br /> CSS3 <Icon name="css3" /> <br />
          <br /> Javascript <Icon name="js" /> <br />
          <br /> Python <Icon name="python" /> <br />
          <br /> C# (Self Study) <Icon name="code" />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
