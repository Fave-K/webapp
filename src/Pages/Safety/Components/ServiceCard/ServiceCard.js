import React from "react";
import styled from "styled-components";

const ServiceCard = styled.a`
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
  padding: 1em 0em;
  flex: 1;
`;

const DetailContainer = styled.div`
  padding: 0em 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Assignee = styled.h3`
  font-family: Avenir-Book;
  color: #2e384d;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;
const Price = styled.h3`
  font-family: Avenir-Black;
  color: #2e384d;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;
const Description = styled.p`
  color: #8798ad;
  margin: 0px;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;
const Date = styled.p`
  color: #8798ad;
  margin: 0px;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export default ({ task, color, onTaskClick }) => {
  return (
    <ServiceCard
      onClick={(e) => {
        e.preventDefault();
        onTaskClick(task);
      }}
    >
      <BorderHighlight color={color} />
      <Content>
        <DetailContainer>
          <Assignee>{task.name}</Assignee>
          <Price>${task.price}</Price>
        </DetailContainer>
        <DetailContainer>
          <Description>{task.description}</Description>
          <Date>{task.date}</Date>
        </DetailContainer>
      </Content>
    </ServiceCard>
  );
};
