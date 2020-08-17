import React from "react";
import styled from "styled-components";

import { Icon, Image, Button } from "semantic-ui-react";

const OperatorsContainer = styled.div`
  padding: 2em 1em;
`;

const OperatorsHeaderContainer = styled.div``;
const OperatorsHeader = styled.h4`
  font-family: Avenir-Roman;
  color: #25265e;
`;

const OperatorListContainer = styled.div`
  padding: 10px 0px;
`;

const OperatorItem = styled.a`
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

const OperatorAvatar = styled(Image)`
  border-width: 2px;
  border-color: ${(props) => (props.color ? props.color : "transparent")};
`;
const OperatorName = styled.p`
  font-family: Avenir-Roman;
`;

const AddDispatchButton = styled(Button)`
  &&& {
    font-family: Avenir-Roman;
    background-color: #2e5bff;
  }
`;

const InviteInspectionOperatorButton = styled(Button)`
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

export default function InspectionOperators() {
  return (
    <OperatorsContainer>
      <OperatorsHeaderContainer>
        <OperatorsHeaderContainer>
          <OperatorsHeader>Inspection operators</OperatorsHeader>
        </OperatorsHeaderContainer>
      </OperatorsHeaderContainer>
      <OperatorListContainer>
        {operators.map((operator, index) => (
          <OperatorItem key={index} href="#">
            <ContentContainer>
              <OperatorAvatar src={operator.image} avatar />
              <OperatorName>{operator.name}</OperatorName>
            </ContentContainer>
            <Icon name="comment alternate outline" size="large" />
          </OperatorItem>
        ))}
      </OperatorListContainer>
      <InviteInspectionOperatorButton basic fluid>
        invite inspection operator
      </InviteInspectionOperatorButton>
    </OperatorsContainer>
  );
}
