import React from "react";
import styled from "styled-components";

const InspectionCard = styled.a`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: #fff;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 5px;
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

const BorderHighlight = styled.div`
  width: 3px;
  background-color: ${(props) => (props.color ? props.color : "white")};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em 0em;
`;

const DetailContainer = styled.div`
  padding: 0em 2em;
`;
const DateContainer = styled.div`
  padding: 0em 1em;
`;

const Inspector = styled.h3`
  font-family: Avenir-Book;
  color: #2e384d;

  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;
const Equipment = styled.p`
  color: #8798ad;

  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;
const Date = styled.p`
  font-family: Avenir-Roman;
  color: #2e384d;

  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export default ({ task, index, color, onTaskClick }) => (
  <InspectionCard
    onClick={(e) => {
      e.preventDefault();
      onTaskClick(task);
    }}
  >
    <BorderHighlight color={color}></BorderHighlight>
    <Content>
      <DetailContainer>
        <Inspector>{task.name}</Inspector>
        <Equipment>EQUIPMENT #{task.equipmentNumber}</Equipment>
      </DetailContainer>
      <DateContainer>
        <Date>{task.date}</Date>
      </DateContainer>
    </Content>
  </InspectionCard>
);
