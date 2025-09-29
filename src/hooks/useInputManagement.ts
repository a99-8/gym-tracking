import { useState } from "react";
import { Alert } from "react-native";

type HandleAddType = (bodyPart: string) => void;

export default function useInputManagement(handleAdd: HandleAddType) {
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
    handleAdd(selectedValue);
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
