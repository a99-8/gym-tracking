// src/hooks/useTableManagement.ts
import {
  getTableDataFromStorage,
  storeTableDataToStorage,
} from "@/src/func/asyncStorage";
import { handleAddLogic } from "@/src/logic/handleAdd";
import { handleDeleteLogic } from "@/src/logic/handleDelete";
import { handleEmptyLogic } from "@/src/logic/handleEmpty";
import TableEntry from "@/src/types/tableEntry";
import { useCallback, useEffect, useState } from "react";

export default function useTableManagement() {
  const [table, setTable] = useState<TableEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await getTableDataFromStorage();
      setTable(data || []);
      setIsLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      storeTableDataToStorage(table);
    }
  }, [table, isLoading]);

  // --- دوال إدارة الجدول المُعاد تصديرها ---

  // استخدام useCallback لتغليف الدالة المنطقية وإرسال setTable
  const handleAdd = useCallback((bodyPart: string) => {
    handleAddLogic(setTable, bodyPart);
  }, []);

  const handleDelete = useCallback((idToDelete: number) => {
    handleDeleteLogic(setTable, idToDelete);
  }, []);

  const handleEmpty = useCallback(() => {
    handleEmptyLogic(setTable);
  }, []);

  return {
    table,
    isLoading,
    handleAdd,
    handleDelete,
    handleEmpty,
  };
}
