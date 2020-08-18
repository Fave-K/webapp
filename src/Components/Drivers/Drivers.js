import { Button, Icon, Image } from "semantic-ui-react";

import React from "react";
import styled from "styled-components";

const DriversContainer = styled.div`
  padding: 2em 1em;
`;

const DriversHeaderContainer = styled.div``;
const DriversHeader = styled.h4`
  font-family: Avenir-Roman;
  color: #25265e;
`;

const DriverListContainer = styled.div`
  padding: 10px 0px;
`;

const DriverItem = styled.a`
  color: #3d3d3d;
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DriverAvatar = styled(Image)`
  border-width: 2px;
  border-color: ${(props) => (props.color ? props.color : "transparent")};
`;
const DriverName = styled.p`
  font-family: Avenir-Roman;
`;

const AddDispatchButton = styled(Button)`
  &&& {
    font-family: Avenir-Roman;
    background-color: #2e5bff;
  }
`;

const AddDispatchOperatorButton = styled(Button)`
  &&& {
    font-family: Avenir-Roman;
    color: #2e5bff;
  }
`;

const operators = [
  {
    name: "Mike Piechota",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    color: "#43A047",
  },
  {
    name: "Mike Piechota",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    color: "#43A047",
  },
  {
    name: "Mike Piechota",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    color: "#43A047",
  },
  {
    name: "Mike Piechota",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    color: "#43A047",
  },
  {
    name: "Mike Piechota",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    color: "#43A047",
  },
  {
    name: "Mike Piechota",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    color: "#43A047",
  },
  {
    name: "Mike Piechota",
    image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    color: "#43A047",
  },
];

export default function Drivers() {
  return (
    <DriversContainer>
      <DriversHeaderContainer>
        <DriversHeaderContainer>
          <DriversHeader>Current Drivers</DriversHeader>
        </DriversHeaderContainer>
      </DriversHeaderContainer>
      <DriverListContainer>
        {operators.map((operator, index) => (
          <DriverItem key={index} href="#">
            <ContentContainer>
              <DriverAvatar src={operator.image} avatar />
              <DriverName>{operator.name}</DriverName>
            </ContentContainer>
            <Icon name="comment alternate outline" size="large" />
          </DriverItem>
        ))}
      </DriverListContainer>
      <AddDispatchOperatorButton basic fluid>
        Edit driver status
      </AddDispatchOperatorButton>
    </DriversContainer>
  );
}
