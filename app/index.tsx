import * as Components from "@/src/components";
import useInputManagement from "@/src/hooks/useInputManagement";
import useTableManagement from "@/src/hooks/useTableManagement";
import styles from "@/src/styles/index.style";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

const GymTrackerContent = () => {
  const { table, isLoading, handleAdd, handleDelete, handleEmpty } =
    useTableManagement();

  const {
    selectedValue,
    modalVisible,
    setModalVisible,
    handleSelection,
    handleAddWrapper,
  } = useInputManagement(handleAdd, table.length);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
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
              title="إضافة"
              onPress={handleAddWrapper}
              color="#f1dd00ff"
            />
            <Components.CustomButtom
              title="حذف الكل"
              onPress={handleEmpty}
              color="#f7361cff"
            />
          </View>
          <Components.Table data={table} handleDelete={handleDelete} />
        </View>
      </Components.Background>
    );
  }
};

export default function Index() {
  return (
    <Components.sqlMange>
      <GymTrackerContent />
    </Components.sqlMange>
  );
}
