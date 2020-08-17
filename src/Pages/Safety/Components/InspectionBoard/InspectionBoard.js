import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styled from "styled-components";
import { Card, Icon, Image } from "semantic-ui-react";
import initialData from "./data";

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
`;

const CardsContainer = styled.div``;

const ColumnHeader = styled.h4``;

const StatusCard = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <Card>
          <Card.Content>
            <Card.Header>{task.name}</Card.Header>
            <Card.Meta>{task.date}</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    )}
  </Draggable>
);

const Column = ({ column, tasks }) => {
  return (
    <StatusColumn>
      <ColumnHeaderContainer>
        <ColumnHeader>{column.title}</ColumnHeader>
      </ColumnHeaderContainer>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <CardsContainer
            innerRef={provided.innerRef}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((item, index) => (
              <StatusCard index={index} key={item.id} task={item} />
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
