import { Icon, Input } from "semantic-ui-react";

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 2em 4em;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
`;

const Content = styled.div`
  flex: 1;
`;
const Footer = styled.div`
  padding: 2em;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  -moz-box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
  box-shadow: 0px 0px 2px 0px rgba(179, 179, 179, 1);
`;

export default function Chat() {
  let item = {
    name: "Lisa F. Bogar",
    message: "If you're still having trouble loading... ",
    path: "inbox",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    time: "2m",
  };
  return (
    <Wrapper>
      <Header>
        <h1>{item.name}</h1>
      </Header>
      <Content></Content>

      <Footer>
        <Input
          icon="smile outline"
          iconPosition="left"
          //   label={{ basic: true, content: <Icon name="send" /> }}
          //   labelPosition="right"
          placeholder="Type a message"
          fluid
          action={{
            icon: "send",
          }}
        />
      </Footer>
    </Wrapper>
  );
}
