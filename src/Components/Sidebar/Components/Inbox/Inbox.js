import { Form, Image, Input } from "semantic-ui-react";
import React, { useState } from "react";

import Operators from "components/Drivers";
import styled from "styled-components";

const people = [
  {
    name: "Lisa F. Bogar",
    message: "If you're still having trouble loading... ",
    path: "inbox",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    time: "2m",
  },
  {
    name: "Lisa F. Bogar",
    message: "If you're still having trouble loading... ",
    path: "inbox",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    time: "2m",
  },
  {
    name: "Lisa F. Bogar",
    message: "If you're still having trouble loading... ",
    path: "inbox",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    time: "2m",
  },
  {
    name: "Lisa F. Bogar",
    message: "If you're still having trouble loading... ",
    path: "inbox",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    time: "2m",
  },
  {
    name: "Lisa F. Bogar",
    message: "If you're still having trouble loading... ",
    path: "inbox",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    time: "2m",
  },
  {
    name: "Lisa F. Bogar",
    message: "If you're still having trouble loading... ",
    path: "inbox",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    time: "2m",
  },
  {
    name: "Lisa F. Bogar",
    message: "If you're still having trouble loading... ",
    path: "inbox",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    time: "2m",
  },
  {
    name: "Lisa F. Bogar",
    message: "If you're still having trouble loading... ",
    path: "inbox",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    time: "2m",
  },
  {
    name: "Lisa F. Bogar",
    message: "If you're still having trouble loading... ",
    path: "inbox",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    time: "2m",
  },
];

const Wrapper = styled.div``;

const HeaderContainer = styled.div`
  padding: 2em;
`;

const DispatchMenusContainer = styled.div`
  border-bottom-width: 2px;
  border-bottom-color: #eeeeee;
  border-bottom-style: solid;
`;

const MenuItem = styled.a`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => (props.selected ? "#2E5BFF" : "black")};
  background-color: ${(props) => props.selected && "#EAEFFF"};

  &:hover {
    color: black;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
  }
`;

const Border = styled.div`
  width: 5px;
  background-color: ${(props) => (props.selected ? "red" : "transparent")};
`;
const MenuLabel = styled.p`
  padding: 1em 2em;
  font-family: Avenir-Roman;

  font-family: ${(props) => (props.selected ? "Avenir-Black" : "Avenir-Roman")};
`;

const UserCard = styled.a`
  padding: 1em;
  color: black;
  display: flex;
  flex-direction: row;
`;

const ChatContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const ChatTopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Name = styled.h3`
  color: #2e384d;
  font-family: Avenir-Roman;
`;
const Time = styled.p`
  color: #8798ad;
  font-family: Avenir-Roman;
`;
const ChatBottomContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Message = styled.p`
  color: #8798ad;
  font-family: Avenir-Roman;
`;

export default function ControlRoom() {
  let [currentInboxMenu, setCurrentInboxMenu] = useState(people[0]);
  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Inbox</h1>
        <Form>
          <Form.Field>
            <Input icon="search" placeholder="Search..." />
          </Form.Field>
        </Form>
      </HeaderContainer>
      <DispatchMenusContainer>
        {people.map((item, index) => (
          <UserCard>
            <Image src={item.image} avatar circular />
            <ChatContent>
              <ChatTopContent>
                <Name>{item.name}</Name>
                <Time>{item.time}</Time>
              </ChatTopContent>
              <ChatBottomContent>
                <Message>{item.message}</Message>
              </ChatBottomContent>
            </ChatContent>
          </UserCard>
        ))}
      </DispatchMenusContainer>
      <Operators />
    </Wrapper>
  );
}
