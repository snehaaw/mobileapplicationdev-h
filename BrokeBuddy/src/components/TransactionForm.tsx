
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { TransactionEntry, TransactionType } from '../utils/utility';

interface TransactionFormProps {
  initialData?: TransactionEntry;
  onSubmit: (transaction: TransactionEntry) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [amount, setAmount] = useState(initialData?.amount.toString() || '');
  const [desc, setDesc] = useState(initialData?.desc || '');
  const [type, setType] = useState(initialData?.type || TransactionType.Essential);
  const [errors, setErrors] = useState({ title: '', amount: '', desc: '' });

  const handleSubmit = () => {
    
    const newErrors = {
      title: title ? '' : 'Title cannot be empty',
      amount: amount ? '' : 'Amount cannot be empty',
      desc: desc ? '' : 'Description cannot be empty',
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) return;

    
    const transactionData: TransactionEntry = {
      id: initialData?.id || new Date().getTime().toString(),
      title,
      amount: parseFloat(amount),
      desc,
      type,
    };

    onSubmit(transactionData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={styles.input}
      />
      {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
      
      <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Amount"
        keyboardType="numeric"
        style={styles.input}
      />
      {errors.amount && <Text style={styles.errorText}>{errors.amount}</Text>}
      
      <TextInput
        value={desc}
        onChangeText={setDesc}
        placeholder="Description"
        style={styles.input}
      />
      {errors.desc && <Text style={styles.errorText}>{errors.desc}</Text>}

      <Button title="Submit" onPress={handleSubmit} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 8, marginBottom: 8 },
  errorText: { color: 'red', fontSize: 12 },
});

export default TransactionForm;
