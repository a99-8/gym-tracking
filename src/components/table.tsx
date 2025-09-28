import Header from "@/src/components/header";
import emptyTextAfter from "@/src/func/emptyTextAfter";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TableProps from "../types/TableProps";
import TableEntry from "../types/tableEntry";

const table = ({ data, handleDelete }: TableProps) => {
  const reversedData = [...data].reverse();
  return (
    <View style={styles.tableContainer}>
      <Header />
      <FlatList
        data={reversedData}
        scrollEnabled={true}
        keyExtractor={(item: TableEntry) => item.id.toString()}
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
    </View>
  );
};

const styles = StyleSheet.create({
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
