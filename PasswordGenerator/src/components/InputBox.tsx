import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type InputBoxProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

function InputBox({ value, placeholder, onChangeText }: InputBoxProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      maxLength={2}
      keyboardType="numeric"  
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    width: '100%',
  },
});

export default InputBox;
