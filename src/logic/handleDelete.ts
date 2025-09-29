import TableEntry from "@/src/types/tableEntry";
import { Dispatch, SetStateAction } from "react";
import { Alert } from "react-native";

export const handleDeleteLogic = (
  setTable: Dispatch<SetStateAction<TableEntry[]>>,
  idToDelete: number
) => {
  Alert.alert("تنبيه", "هل أنت متأكد من حذف هذا العنصر؟", [
    {
      text: "نعم",
      onPress: () => {
        setTable((prevTable) => {
          const filteredTable = prevTable.filter(
            (item) => item.id !== idToDelete
          );

          const reNumberedTable = filteredTable.map((item, index) => ({
            ...item,
            id: index + 1,
          }));

          return reNumberedTable;
        });
      },
      style: "destructive",
    },
    {
      text: "لا",
      style: "cancel",
    },
  ]);
};
