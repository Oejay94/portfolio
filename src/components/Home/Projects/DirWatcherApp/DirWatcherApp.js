import React from 'react';

import Card from 'react-bootstrap/Card';

import dirWatcherImg from "../ProjectIMG/DirWatcher.png";
import './style.css';

function DirWatcherApp(){
    return (
        <Card className="dirWatcherCard">
              <Card.Img
                className="dirWatcherImage"
                variant="top"
                src={dirWatcherImg}
              />
              <Card.Body>
                <Card.Title>
                  <a
                    href="https://github.com/Oejay94/dirwatcher"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DirWatcher
                  </a>
                </Card.Title>
                <Card.Subtitle>Python</Card.Subtitle>
              </Card.Body>
            </Card>
    )
}

export default DirWatcherApp