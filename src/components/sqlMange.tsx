import initStatement from "@/src/database/init.sql";
import { SQLiteProvider, type SQLiteDatabase } from "expo-sqlite";
import React from "react";

interface SqlMangeProps {
  children?: React.ReactNode;
}

const initDatabase = async (db: SQLiteDatabase) => {
  await db.execAsync(initStatement);
};

const SqlMange: React.FC<SqlMangeProps> = ({ children }) => {
  return (
    <SQLiteProvider
      databaseName="gym.db"
      onInit={initDatabase}
      options={{ useNewConnection: false }}
    >
      {children}
    </SQLiteProvider>
  );
};

export default SqlMange;
