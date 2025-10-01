import { useState } from "react";
import { Alert } from "react-native";

type HandleAddType = (bodyPart: string, currentTableLength: number) => void;

export default function useInputManagement(
  handleAdd: HandleAddType,
  currentTableLength: number
) {
  const [selectedValue, setSelectedValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelection = (item: string) => {
    setSelectedValue(item);
    setModalVisible(false);
  };

  function handleAddWrapper() {
    if (!selectedValue) {
      Alert.alert("تنبيه", "الرجاء اختيار جزء من الجسم أولاً.");
      return;
    }
    handleAdd(selectedValue, currentTableLength);
    setSelectedValue("");
  }

  return {
    selectedValue,
    setSelectedValue,
    modalVisible,
    setModalVisible,
    handleSelection,
    handleAddWrapper,
  };
}
