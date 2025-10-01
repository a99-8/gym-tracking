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
  const filteredData = data.filter(
    (item) => item !== null && item !== undefined
  );
  const reversedData = [...filteredData].reverse();

  return (
    <View style={styles.tableContainer}>
      {/* the start of the Header */}
      <Text style={styles.title}>جدول التمارين الأسبوعية </Text>
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
        keyExtractor={(item: TableEntry, index: number) =>
          item?.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }: { item: TableEntry }) => (
          <View
            style={[
              styles.dataRow,
              { backgroundColor: item.id % 2 === 0 ? "#ffffff" : "#f9f9f9" },
            ]}
          >
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

const styles = StyleSheet.create({
  // ... الستايلات الأخرى

  tableContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },

  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  headerCell: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#555",
    fontSize: 14,
    paddingHorizontal: 5,
  },

  dataRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#ffffff",
  },

  dataCell: {
    textAlign: "center",
    fontSize: 13,
    color: "#444",
    paddingHorizontal: 5,
  },

  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  deleteButtonText: {
    fontSize: 18,
  },
  emptyText: {
    textAlign: "center",
    padding: 20,
    color: "#888",
  },
});

export default table;
