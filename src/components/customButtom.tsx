import styles from "@/src/styles/custom-buttom.style";
import CustomButtomProps from "@/src/types/CustomButtomProps";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

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

export default CustomButtom;
