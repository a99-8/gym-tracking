import { headerNames } from "@/src/other/constants";
import { emptyTextAfter } from "@/src/other/functions";
import styles from "@/src/styles/table.style";
import TableProps from "@/src/types/TableProps";
import TableEntry from "@/src/types/tableEntry";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

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

export default table;
