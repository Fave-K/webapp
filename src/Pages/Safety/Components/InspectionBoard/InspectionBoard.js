import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useState } from "react";

import { Label } from "semantic-ui-react";
import StatusCard from "../InspectionCard";
import initialData from "./data";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow-x: scroll;
  padding: 0em 2em;
`;

const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2em;
  min-width: 300px;
`;
const ColumnHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em;
`;

const CardsContainer = styled.div`
  min-height: 300px;
`;

const ColumnHeader = styled.h4`
  font-family: Avenir-Book;
  color: #b0bac9;

  font-size: 1.5em;
`;

const Column = ({ column, tasks, onTaskClick }) => {
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
                onTaskClick={onTaskClick}
              />
            ))}
            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </StatusColumn>
  );
};

export default function InspectionBoard({ onTaskClick }) {
  let [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = data.columns[source.droppableId];
    const newSourceTaskIds = Array.from(sourceColumn.taskIds);
    newSourceTaskIds.splice(source.index, 1);
    const newSourceColumn = {
      ...sourceColumn,
      taskIds: newSourceTaskIds,
    };

    const destinationColumn = data.columns[destination.droppableId];
    const newDestinationTaskIds = Array.from(destinationColumn.taskIds);
    newDestinationTaskIds.splice(destination.index, 0, draggableId);
    const newDestinationColumn = {
      ...destinationColumn,
      taskIds: newDestinationTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn,
      },
    };

    setData(newData);
  };
  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map((columnId) => {
          let column = data.columns[columnId];
          let tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
          return (
            <Column column={column} tasks={tasks} onTaskClick={onTaskClick} />
          );
        })}
      </DragDropContext>
    </Wrapper>
  );
}
