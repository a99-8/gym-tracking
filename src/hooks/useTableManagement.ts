// src/hooks/useTableManagement.ts
import { handleAddLogic } from "@/src/logic/handleAdd";
import { handleDeleteLogic } from "@/src/logic/handleDelete";
import { handleEmptyLogic } from "@/src/logic/handleEmpty";
import { getAllStatement } from "@/src/other/statements";
import TableEntry from "@/src/types/tableEntry";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useEffect, useState } from "react";

export default function useTableManagement() {
  const [table, setTable] = useState<TableEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const db = useSQLiteContext();

  const loadDataBase = useCallback(async () => {
    // <--- الدالة التي يجب تمريرها
    try {
      const results = (await db.getAllAsync(getAllStatement)) as TableEntry[];
      setTable(results);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to load data from the database.", error);
      setIsLoading(false);
    }
  }, [db]);

  useEffect(() => {
    loadDataBase();
  }, [loadDataBase]);

  const handleAdd = useCallback(
    // تم إضافة reloadData
    (bodyPart: string, currentTableLength: number) => {
      handleAddLogic(db, currentTableLength, bodyPart, loadDataBase);
    },
    [db, loadDataBase] // تم إضافة loadDataBase كـ dependency
  );

  const handleDelete = useCallback(
    // تم إضافة reloadData
    (idToDelete: number) => {
      handleDeleteLogic(db, idToDelete, loadDataBase);
    },
    [db, loadDataBase] // تم إضافة loadDataBase كـ dependency
  );

  const handleEmpty = useCallback(() => {
    // تم إضافة reloadData
    handleEmptyLogic(db, loadDataBase);
  }, [db, loadDataBase]);

  return {
    table,
    isLoading,
    handleAdd,
    handleDelete,
    handleEmpty,
  };
}
