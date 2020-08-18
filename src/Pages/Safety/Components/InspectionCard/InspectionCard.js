import { Card, Icon, Image } from "semantic-ui-react";

import { Draggable } from "react-beautiful-dnd";
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
`;
const Equipment = styled.p`
  color: #8798ad;
`;
const Date = styled.p`
  font-family: Avenir-Roman;
  color: #2e384d;
`;

export default ({ task, index, color, onTaskClick }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
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
      </div>
    )}
  </Draggable>
);
