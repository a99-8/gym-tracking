import CustomButtomProps from "@/src/types/CustomButtomProps";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButtom = ({ title, color, onPress }: CustomButtomProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});

export default CustomButtom;
