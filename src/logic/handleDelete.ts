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
        setTable((prevTable) =>
          prevTable.filter((item) => item.id !== idToDelete)
        );
      },
      style: "destructive",
    },
    {
      text: "لا",
      style: "cancel",
    },
  ]);
};
