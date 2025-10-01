import { StyleSheet } from "react-native";

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

export default styles;
