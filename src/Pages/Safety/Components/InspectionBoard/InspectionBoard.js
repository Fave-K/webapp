import Board from "components/Board";
import InspectionCard from "../InspectionCard"
import React from "react";
import initialData from "./data";

export default function InspectionBoard({ onTaskClick }) {
  return <Board boardData={initialData} onTaskClick={onTaskClick} cardComponent={InspectionCard} />;
}
