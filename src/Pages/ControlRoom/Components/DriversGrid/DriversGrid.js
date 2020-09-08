import { Button, Card, Grid, Icon, Image } from "semantic-ui-react";

import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 1em 0em;
`;

const DriverCard = styled.div`
  padding: 1em;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background-color: #fff;
`;

const DriverAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DriverName = styled.p`
  font-family: Avenir-Black;
  font-size: 2em;
  margin: 5px;
`;
const DriverPhone = styled.p`
  font-family: Avenir-Book;
  margin: 2px;
`;

const DriverContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

const ViewDetailsButton = styled(Button)`
  &&& {
    font-family: Avenir-Book;
    background-color: #2e5bff;
    color: #fff;
  }
`;

const ChatIconsContainer = styled.div`
  color: blue;
`;

export default function DriversGrid({ onDriverClick }) {
  return (
    <Grid>
      <Grid.Row>
        {Array(25)
          .fill({
            name: "John Doe",
            image:
              "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            phone: "682-2279-7950",
          })
          .map((item, index) => (
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <CardContainer>
                <DriverCard>
                  <DriverAvatarContainer>
                    <Image src={item.image} size="small" circular />
                    <DriverName>{item.name}</DriverName>
                    <DriverPhone>Cell: {item.phone}</DriverPhone>
                  </DriverAvatarContainer>
                  <DriverContactContainer>
                    <ViewDetailsButton
                      onClick={(e) => {
                        e.preventDefault();
                        onDriverClick(item);
                      }}
                    >
                      See details
                    </ViewDetailsButton>
                    <ChatIconsContainer>
                      <Icon name="rocketchat" size="big" link />
                      <Icon name="write square" size="big" link />
                    </ChatIconsContainer>
                  </DriverContactContainer>
                </DriverCard>
              </CardContainer>
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
}
