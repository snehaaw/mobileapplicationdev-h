import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <MainLayout>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </MainLayout>
  );
}

export default HomeScreen;
