import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import styles from './styles';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addTask = () => {
    if (taskText.trim().length > 0) {
      setTasks((currentTasks) => [
        ...currentTasks,
        {
          id: Math.random().toString(),
          text: taskText.trim(),
          completed: false,
        },
      ]);
      setTaskText("");
      setErrorMessage("");
      Keyboard.dismiss();
    } else {
      setErrorMessage("Please enter a task before adding.");
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
        <MaterialIcons
          name={item.completed ? "check-box" : "check-box-outline-blank"}
          size={24}
          color={item.completed ? "green" : "gray"}
        />
      </TouchableOpacity>

      <Text
        style={[styles.taskText, item.completed && styles.taskTextCompleted]}
      >
        {item.text}
      </Text>

      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient colors={["#f5f5f5", "#002147"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.header}>My To-Do List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            value={taskText}
            onChangeText={setTaskText}
            onSubmitEditing={addTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        {tasks.length === 0 ? (
          <Text style={styles.noTasks}>No tasks yet! Add some above.</Text>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.taskList}
          />
        )}
      </View>
    </LinearGradient>
  );
}

