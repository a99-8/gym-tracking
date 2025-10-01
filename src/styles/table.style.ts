import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },

  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  headerCell: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#555",
    fontSize: 14,
    paddingHorizontal: 5,
  },

  dataRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#ffffff",
  },

  dataCell: {
    textAlign: "center",
    fontSize: 13,
    color: "#444",
    paddingHorizontal: 5,
  },

  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  deleteButtonText: {
    fontSize: 18,
  },
  emptyText: {
    textAlign: "center",
    padding: 20,
    color: "#888",
  },
});

export default styles;
