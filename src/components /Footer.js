import React from "react";
import {
  Divider,
  List,
  Icon,
  Segment,
  Container,
  Grid,
  Header
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class Footer extends React.Component {
  render() {
    return (
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em, 0em" }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={5} className="ReachOutGrid">
              <Header inverted as="h4" content="Reach Out!" />
              <p>
                If you have any questions or would like to chat, please feel
                free to reach out to me. My contact info is listed to the right.
              </p>
            </Grid.Column>
            <Grid.Column width={5} className="ContactGrid">
              <Header inverted as="h4" content="Contact Info" />
              <List link inverted>
                <List.Item className="PhoneNumberList">
                  <a href="tel:+3175226868">
                    <Icon name="phone" />
                    Phone Number: 317-522-6868
                  </a>
                </List.Item>

                <List.Item>
                  <a href="mailto:joseph.d.brown94@gmail.com">
                    <Icon name="mail" color="yellow" />
                    Email: joseph.d.brown94@gmail.com
                  </a>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5} className="SocialMediaGrid">
              <Header inverted as="h4" content="My Social Media Accounts" />
              <List link inverted>
                <List.Item>
                  <a
                    href="https://www.facebook.com/joe.brown.12327"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="facebook" color="blue" />
                    Facebook
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    href="https://twitter.com/oejay94"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="twitter" color="blue" />
                    Twitter
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    href="https://www.instagram.com/oejay1994/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="instagram" color="purple" />
                    Instagram
                  </a>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
