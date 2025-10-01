import { clearTableDataFromStorage } from "@/src/other/asyncStorage";
import TableEntry from "@/src/types/tableEntry";
import { Dispatch, SetStateAction } from "react";
import { Alert, Platform } from "react-native";

export const handleEmptyLogic = async (
  setTable: Dispatch<SetStateAction<TableEntry[]>>
) => {
  if (Platform.OS === "web") {
    setTable([]);
    await clearTableDataFromStorage();
  } else {
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
  }
};
