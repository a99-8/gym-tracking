import Background from "@/src/components/backGround";
import CustomButtom from "@/src/components/customButtom";
import DropdownInput from "@/src/components/dropdownInput";
import Table from "@/src/components/table";
import useTableManagement from "@/src/hook/useTableManagement";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function Index() {
  // استدعاء الـ Hook المخصص
  const { table, handleAdd, handleDelete, handleEmpty, handleClear } =
    useTableManagement();
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
    if (table.length >= 5) {
      handleClear();
    }
    handleAdd(selectedValue);
    setSelectedValue("");
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.centering}>
          <Text style={styles.title}>إضافة جزء من الجسم لليوم</Text>
          <DropdownInput
            selectedValue={selectedValue}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            handleSelection={handleSelection}
          />
          <CustomButtom
            title="إضافة (Add)"
            onPress={handleAddWrapper}
            color="#f1dd00ff"
          />
          <CustomButtom
            title="حذف الكل (deleteAll)"
            onPress={handleEmpty}
            color="#f7361cff"
          />
        </View>
        <Table data={table} handleDelete={handleDelete} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
