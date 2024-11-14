import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const toggleEasterEgg = () => setShowEasterEgg(!showEasterEgg);

  return (
    <MainLayout>
      <Text style={styles.title}>App Name: ToDo App</Text>
      <TouchableOpacity onPress={toggleEasterEgg}>
        <Text style={styles.name}>By: Sneha</Text>
      </TouchableOpacity>
      <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
      
      {showEasterEgg && <Text style={styles.easterEgg}>Hello! You've found the Easter Egg!</Text>}
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, marginBottom: 10 },
  name: { fontSize: 18, color: 'blue' },
  date: { fontSize: 16, marginTop: 10 },
  easterEgg: { fontSize: 16, marginTop: 20, color: 'green' },
});

export default AboutScreen;
