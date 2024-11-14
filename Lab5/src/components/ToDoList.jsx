import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <View>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#000000',
    backgroundColor: 'white',
  },
  taskText: {
    fontSize: 18,
    textDecorationLine: 'none', 
  },
});
