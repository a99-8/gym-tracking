import React from "react";
import { StyleSheet, Text, View } from "react-native";
import headerNames from "../constants/headerNames";

const Header = () => {
  return (
    <>
      <Text style={styles.title}>إضافة جزء من الجسم لليوم</Text>
      <View style={styles.headerRow}>
        {headerNames.map((item, index) => (
          <Text key={index} style={[styles.headerCell, { flex: item.flex }]}>
            {item.name}
          </Text>
        ))}
      </View>
    </>
  );
};

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
});

export default Header;
