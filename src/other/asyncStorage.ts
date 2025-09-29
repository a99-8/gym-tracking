import TableEntry from "@/src/types/tableEntry";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "local-table-data";

export async function getTableDataFromStorage(): Promise<TableEntry[]> {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Error getting data from AsyncStorage:", e);
    // يمكنك هنا إظهار تنبيه أو التعامل مع الخطأ بطريقة أخرى
    return [];
  }
}

export async function storeTableDataToStorage(
  data: TableEntry[]
): Promise<void> {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error("Error storing data in AsyncStorage:", e);
  }
}

export async function clearTableDataFromStorage(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Error clearing data from AsyncStorage:", e);
  }
}
// تذكر تعديل مسار الاستدعاء في useTableManagement
