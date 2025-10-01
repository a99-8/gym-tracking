// File: src/components/SqlMange.tsx (التعديل المقترح)
import { initStatement } from "@/src/other/statements";
import { SQLiteProvider, type SQLiteDatabase } from "expo-sqlite";
import React from "react";

interface SqlMangeProps {
  children?: React.ReactNode;
}

const initDatabase = async (db: SQLiteDatabase) => {
  try {
    // حاول تنفيذ عبارات التهيئة
    await db.execAsync(initStatement);
    console.log("Database initialized successfully.");
  } catch (error) {
    // ⚠️ الأهم: التقاط أي فشل وطباعته بوضوح
    console.error("FAILED TO INITIALIZE DATABASE:", error);
    // يمكنك هنا عرض Alert للمستخدم إذا كان الفشل حرجاً
  }
};

const SqlMange: React.FC<SqlMangeProps> = ({ children }) => {
  return (
    <SQLiteProvider
      databaseName="gym.db"
      onInit={initDatabase} // سيتم استدعاء الدالة الجديدة التي تطبع الأخطاء
      options={{ useNewConnection: false }}
    >
      {children}
    </SQLiteProvider>
  );
};

export default SqlMange;
