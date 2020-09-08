import Board from "components/Board";
import React from "react";
import ServiceCard from "../ServiceCard";
import initialData from "./data";

export default function ServicesBoard({ onTaskClick }) {
  return (
    <Board
      boardData={initialData}
      onTaskClick={onTaskClick}
      cardComponent={ServiceCard}
    />
  );
}
