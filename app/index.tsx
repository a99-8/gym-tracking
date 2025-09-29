import * as Components from "@/src/components";
import useInputManagement from "@/src/hooks/useInputManagement";
import useTableManagement from "@/src/hooks/useTableManagement";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { table, handleAdd, handleDelete, handleEmpty } = useTableManagement();

  const {
    selectedValue,
    modalVisible,
    setModalVisible,
    handleSelection,
    handleAddWrapper,
  } = useInputManagement(handleAdd);

  return (
    <Components.Background>
      <View style={styles.container}>
        <View style={styles.centering}>
          <Text style={styles.title}>تحديد العضلة المستهدفة لهذا اليوم.</Text>
          <Components.DropdownInput
            selectedValue={selectedValue}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
            handleSelection={handleSelection}
          />
          <Components.CustomButtom
            title="إضافة (Add)"
            onPress={handleAddWrapper} // استخدام الدالة من الخطاف الجديد
            color="#f1dd00ff"
          />
          <Components.CustomButtom
            title="حذف الكل (deleteAll)"
            onPress={handleEmpty}
            color="#f7361cff"
          />
        </View>
        <Components.Table data={table} handleDelete={handleDelete} />
      </View>
    </Components.Background>
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
