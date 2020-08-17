import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styled from "styled-components";
import { Label } from "semantic-ui-react";
import initialData from "./data";
import StatusCard from "../InspectionCard";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2em;
`;
const ColumnHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em;
`;

const CardsContainer = styled.div``;

const ColumnHeader = styled.h4`
  font-family: Avenir-Book;
  color: #b0bac9;

  font-size: 1.5em;
`;

const Column = ({ column, tasks }) => {
  return (
    <StatusColumn>
      <ColumnHeaderContainer>
        <ColumnHeader>{column.title}</ColumnHeader>
        <Label color={column.color}>{tasks.length}</Label>
      </ColumnHeaderContainer>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <CardsContainer
            innerRef={provided.innerRef}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((item, index) => (
              <StatusCard
                index={index}
                key={item.id}
                task={item}
                color={column.color}
              />
            ))}
            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </StatusColumn>
  );
};

export default function InspectionBoard() {
  let [data, setData] = useState(initialData);

  const onDragEnd = (result) => {};
  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map((columnId) => {
          let column = data.columns[columnId];
          let tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
          return <Column column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </Wrapper>
  );
}
