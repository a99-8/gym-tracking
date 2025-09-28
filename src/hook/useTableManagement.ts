import formattedDate from "@/src/func/formattedDate";
import TableEntry from "@/src/types/tableEntry";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
// استيراد دوال التخزين من الملف المنفصل
import {
  getTableDataFromStorage,
  storeTableDataToStorage,
} from "./asyncStorageUtils";

export default function useTableManagement() {
  const [table, setTable] = useState<TableEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. تحميل البيانات عند التهيئة
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await getTableDataFromStorage();
      setTable(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  // 2. حفظ البيانات في كل مرة يتغير فيها الجدول
  useEffect(() => {
    if (!isLoading) {
      storeTableDataToStorage(table);
    }
  }, [table, isLoading]);

  // --- دوال إدارة الجدول ---

  const handleAdd = useCallback(
    (bodyPart: string) => {
      const newId =
        table.length > 0 ? Math.max(...table.map((item) => item.id)) + 1 : 1;
      const newEntry: TableEntry = {
        id: newId,
        bodyPart,
        date: formattedDate,
      };

      setTable((prevTable) => [...prevTable, newEntry]);
    },
    [table]
  ); // لا يزال يحتاج إلى table لتوليد الـ ID بشكل صحيح

  const handleDelete = useCallback((idToDelete: number) => {
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
  }, []);

  const handleEmpty = useCallback(() => {
    Alert.alert("تنبيه", "هل أنت متأكد من مسح الجدول بالكامل؟", [
      {
        text: "نعم",
        onPress: () => {
          setTable([]);
        },
        style: "destructive",
      },
      {
        text: "لا",
        style: "cancel",
      },
    ]);
  }, []);

  return {
    table,
    isLoading, // إضافة حالة التحميل
    handleAdd, // تغيير handlAdd إلى handleAdd لتوحيد التسمية
    handleDelete,
    handleEmpty,
  };
}
