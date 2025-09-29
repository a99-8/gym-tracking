import { bodyParts } from "@/src/other/constants";
import DropdownInputProps from "@/src/types/DropdownInputProps";
import React from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DropdownInput = ({
  setModalVisible,
  selectedValue,
  modalVisible,
  handleSelection,
}: DropdownInputProps) => {
  return (
    <View style={styles.dropdownInput}>
      {/* start MainInput */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <TextInput
          value={selectedValue || "اضغط للاختيار"}
          editable={false}
          style={styles.textInput}
        />
      </TouchableOpacity>
      {/* end MainInput */}

      {/* start dorpdown */}
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>اختر من القائمة:</Text>
            <FlatList
              data={bodyParts}
              keyExtractor={(item: string) => item}
              renderItem={({ item }: { item: string }) => (
                <TouchableOpacity
                  onPress={() => handleSelection(item)}
                  style={styles.listItem}
                >
                  <Text style={styles.listItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      {/* end dorpdown */}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownInput: {
    marginBottom: 20,
    width: "30%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    minWidth: "100%",
    borderRadius: 5,
    backgroundColor: "white",
    textAlign: "right",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxHeight: "50%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "right",
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemText: {
    textAlign: "right",
    fontSize: 16,
  },
});

export default DropdownInput;
