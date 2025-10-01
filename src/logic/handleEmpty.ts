// File: src/logic/handleEmpty.ts
import { resetStatement } from "@/src/other/statements";
import { Alert, Platform } from "react-native";

// تم إضافة reloadData
export const handleEmptyLogic = async (db: any, reloadData: () => void) => {
  const executeReset = async () => {
    try {
      // استخدام الدالة الموحدة لإعادة الضبط (مسح الجدول)
      await db.runAsync(resetStatement, []);

      reloadData(); // تحديث البيانات بعد عملية DB ناجحة
    } catch (error) {
      console.error("Failed to reset database:", error);
    }
  };

  if (Platform.OS === "web") {
    await executeReset();
  } else {
    Alert.alert("تنبيه", "هل أنت متأكد من مسح الجدول بالكامل؟", [
      {
        text: "نعم",
        onPress: executeReset,
        style: "destructive",
      },
      {
        text: "لا",
        style: "cancel",
      },
    ]);
  }
};
