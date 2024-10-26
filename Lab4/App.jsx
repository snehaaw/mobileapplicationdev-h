import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm';

export default function App() {
  
  const [tasks, setTasks] = React.useState([]);

  
  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) { 
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  task: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#add8e6',
    marginBottom: 5,
  },
});
