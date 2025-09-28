import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import CustomButtomProps from "../types/CustomButtomProps";

const CustomButtom = ({ title, color, onPress }: CustomButtomProps) => {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
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
