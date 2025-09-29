import { headerNames } from "@/src/other/constants";
import { emptyTextAfter } from "@/src/other/functions";
import TableProps from "@/src/types/TableProps";
import TableEntry from "@/src/types/tableEntry";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const table = ({ data, handleDelete }: TableProps) => {
  // 1. تصفية البيانات لإزالة أي قيم 'null' أو 'undefined' غير صالحة
  const filteredData = data.filter(
    (item) => item !== null && item !== undefined
  );
  const reversedData = [...filteredData].reverse();

  return (
    <View style={styles.tableContainer}>
      {/* the start of the Header */}
      <Text style={styles.title}>إضافة جزء من الجسم لليوم</Text>
      <View style={styles.headerRow}>
        {headerNames.map((item, index) => (
          <Text key={index} style={[styles.headerCell, { flex: item.flex }]}>
            {item.name}
          </Text>
        ))}
      </View>
      {/* the end of the Header */}

      {/* the start of the table body */}
      <FlatList
        data={reversedData}
        scrollEnabled={true}
        // 2. تم إصلاح keyExtractor لضمان عدم استدعاء toString() على قيمة null
        // نستخدم الفهرس (index) كـ مفتاح احتياطي في حال كان item.id مفقودًا.
        keyExtractor={(item: TableEntry, index: number) =>
          item?.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }: { item: TableEntry }) => (
          <View style={styles.dataRow}>
            <Text
              style={[styles.dataCell, { flex: 1 }]}
            >{`اليوم ${item.id}`}</Text>
            <Text style={[styles.dataCell, { flex: 3 }]}>{item.date}</Text>
            <Text style={[styles.dataCell, { flex: 4 }]}>{item.bodyPart}</Text>
            <TouchableOpacity
              onPress={() => handleDelete(item.id)}
              style={[styles.deleteButton, { flex: 2 }]}
            >
              <Text style={styles.deleteButtonText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.emptyText}>
            {emptyTextAfter(reversedData.length)}
          </Text>
        }
        ListHeaderComponentStyle={{
          borderBottomColor: "#eee",
          borderBottomWidth: 1,
        }}
      />
      {/* the end of the table body */}
    </View>
  );
};

// ... (بقية الـ styles كما هي)
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  headerCell: {
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 5,
  },
  tableContainer: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "white",
    flex: 1,
  },
  tablebody: {
    paddingBottom: 100,
  },
  dataRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingVertical: 10,
  },
  dataCell: {
    textAlign: "center",
    paddingHorizontal: 5,
    fontSize: 14,
  },
  deleteButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
  emptyText: {
    textAlign: "center",
    padding: 20,
    color: "#888",
  },
});

export default table;
