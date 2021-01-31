import React from "react";
import Carousel from "./Carousel";
import { Header, Divider, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function HeaderSection() {
  return (
    <Header>
      <Divider horizontal>
        <h2>Joseph Brown</h2>
      </Divider>
      <Carousel />
      <p align="center">
        <br></br>
        <a
          className="link"
          href="https://github.com/Oejay94"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" color="black" />
          Github Page
        </a>
        <br></br>
        <a
          className="link"
          href="https://www.linkedin.com/in/joseph-d-brown/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" color="black" />
          Linkedin Page
        </a>
      </p>
    </Header>
  );
}

export default HeaderSection;
