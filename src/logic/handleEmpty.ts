import { clearTableDataFromStorage } from "@/src/func/asyncStorage";
import TableEntry from "@/src/types/tableEntry";
import { Dispatch, SetStateAction } from "react";
import { Alert } from "react-native";

export const handleEmptyLogic = (
  setTable: Dispatch<SetStateAction<TableEntry[]>>
) => {
  Alert.alert("تنبيه", "هل أنت متأكد من مسح الجدول بالكامل؟", [
    {
      text: "نعم",
      onPress: async () => {
        setTable([]);
        await clearTableDataFromStorage();
      },
      style: "destructive",
    },
    {
      text: "لا",
      style: "cancel",
    },
  ]);
};
