import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    minWidth: 200,
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#6D28D9",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  error: {
    color: "#DC2626",
    textAlign: "center",
    marginBottom: 10,
  },
  noTasks: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
    color: "#6B7280",
    fontStyle: "italic",
  },
  taskList: {
    paddingBottom: 20,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    minWidth: 200,
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 1,
  },
  checkbox: {
    fontSize: 24,
    marginRight: 15,
  },
  taskText: {
    flex: 1,
    fontSize: 18,
    color: "#1F2937",
  },
  taskTextCompleted: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },
  deleteIcon: {
    fontSize: 24,
    marginLeft: 10,
  },
});

export default styles;
