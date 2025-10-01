// File: src/logic/handleAdd.ts
import { counter } from "@/src/other/constants";
import { formattedDate } from "@/src/other/functions";
import { addNormalStatement, resetStatement } from "@/src/other/statements";
import TableEntry from "@/src/types/tableEntry";

// تم إضافة reloadData
export const handleAddLogic = async (
  db: any,
  currentTableLength: number,
  bodyPart: string,
  reloadData: () => void
): Promise<void> => {
  let newId: number;

  // 1. تحديد الـ ID الجديد أولاً
  if (currentTableLength === counter) {
    newId = 1;
  } else {
    newId = currentTableLength + 1;
  }

  const newEntry: TableEntry = {
    id: newId,
    bodyPart,
    date: formattedDate(),
  };

  try {
    if (currentTableLength === counter) {
      await db.runAsync(resetStatement, []);
      await db.runAsync(addNormalStatement, [
        newEntry.id,
        newEntry.bodyPart,
        newEntry.date,
      ]); // 2. إضافة العنصر الأول
    } else {
      // إضافة عادية
      await db.runAsync(addNormalStatement, [
        newEntry.id,
        newEntry.bodyPart,
        newEntry.date,
      ]);
    }

    reloadData(); // تحديث البيانات بعد عملية DB ناجحة
  } catch (error) {
    console.error("Failed to add entry:", error);
  }
};
