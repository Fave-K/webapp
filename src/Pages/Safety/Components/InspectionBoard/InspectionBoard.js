import React from "react";

import styled from "styled-components";
import { Card, Icon, Image } from "semantic-ui-react";


const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;

const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2em;
`;
const ColumnHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardsContainer = styled.div``;

const ColumnHeader = styled.h4``;

const StatusCard = () => (
  <Card>
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        10 Friends
      </a>
    </Card.Content>
  </Card>
);

export default function InspectionBoard() {
  return (
    <Wrapper>
      <StatusColumn>
        <ColumnHeaderContainer>
          <ColumnHeader>INSPECTION NEEDED</ColumnHeader>
        </ColumnHeaderContainer>
        <CardsContainer>
          {Array(15)
            .fill({ title: "Title" })
            .map((item, index) => (
              <StatusCard key={index} />
            ))}
        </CardsContainer>
      </StatusColumn>
      <StatusColumn>
        <ColumnHeaderContainer>
          <ColumnHeader>INSPECTION NEEDED</ColumnHeader>
        </ColumnHeaderContainer>
        <CardsContainer>
          {Array(15)
            .fill({ title: "Title" })
            .map((item, index) => (
              <StatusCard key={index} />
            ))}
        </CardsContainer>
      </StatusColumn>
      <StatusColumn>
        <ColumnHeaderContainer>
          <ColumnHeader>INSPECTION NEEDED</ColumnHeader>
        </ColumnHeaderContainer>
        <CardsContainer>
          {Array(15)
            .fill({ title: "Title" })
            .map((item, index) => (
              <StatusCard key={index} />
            ))}
        </CardsContainer>
      </StatusColumn>
      <StatusColumn>
        <ColumnHeaderContainer>
          <ColumnHeader>INSPECTION NEEDED</ColumnHeader>
        </ColumnHeaderContainer>
        <CardsContainer>
          {Array(15)
            .fill({ title: "Title" })
            .map((item, index) => (
              <StatusCard key={index} />
            ))}
        </CardsContainer>
      </StatusColumn>
    </Wrapper>
  );
}
