import formattedDate from "@/src/func/formattedDate";
import TableEntry from "@/src/types/tableEntry";
import { Dispatch, SetStateAction } from "react";

export const handleAddLogic = (
  setTable: Dispatch<SetStateAction<TableEntry[]>>,
  bodyPart: string
) => {
  setTable((prevTable) => {
    if (prevTable.length === 5) {
      const newEntry: TableEntry = {
        id: 1,
        bodyPart,
        date: formattedDate,
      };
      return [newEntry];
    }
    const newEntry: TableEntry = {
      id: prevTable.length + 1,
      bodyPart,
      date: formattedDate,
    };
    return [...prevTable, newEntry];
  });
};
