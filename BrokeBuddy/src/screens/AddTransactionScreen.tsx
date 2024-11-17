import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getNewID, addEditTransaction, TransactionEntry, TransactionType } from '../utils/utility';

interface AddTransactionScreenProps {
  route: any;
  navigation: any;
}

const AddTransactionScreen: React.FC<AddTransactionScreenProps> = ({ route, navigation }) => {
  const { mode, transaction } = route.params || {};

  const [title, setTitle] = useState<string>(transaction?.title || '');
  const [amount, setAmount] = useState<string>(transaction?.amount.toString() || '');
  const [desc, setDesc] = useState<string>(transaction?.desc || '');
  const [type, setType] = useState<TransactionType>(transaction?.type || TransactionType.Essential);
  const [errors, setErrors] = useState({ title: '', amount: '', desc: '' });

  useEffect(() => {
    
    if (mode !== 'edit') {
      setTitle('');
      setAmount('');
      setDesc('');
      setType(TransactionType.Essential);
      setErrors({ title: '', amount: '', desc: '' });
    }
  }, [mode]);

  const handleSave = () => {
    const newErrors = {
      title: title ? '' : 'Title cannot be empty',
      amount: amount && !isNaN(parseFloat(amount)) ? '' : 'Amount cannot be empty',
      desc: desc ? '' : 'Description cannot be empty',
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((e) => e)) return;

    const newTransaction: TransactionEntry = {
      id: mode === 'edit' ? transaction.id : getNewID(),
      title,
      amount: parseFloat(amount),
      desc,
      type,
    };

    addEditTransaction(newTransaction);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        placeholderTextColor="#888"
        style={styles.input}
      />
      {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}

      <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Amount"
        keyboardType="numeric"
        placeholderTextColor="#888"
        style={styles.input}
      />
      {errors.amount && <Text style={styles.errorText}>{errors.amount}</Text>}

      <TextInput
        value={desc}
        onChangeText={setDesc}
        placeholder="Description"
        placeholderTextColor="#888"
        style={styles.input}
      />
      {errors.desc && <Text style={styles.errorText}>{errors.desc}</Text>}

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label="Essential" value={TransactionType.Essential} />
          <Picker.Item label="Leisure" value={TransactionType.Leisure} />
          <Picker.Item label="Others" value={TransactionType.Others} />
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={mode === 'edit' ? 'Update Transaction' : 'Submit'}
          onPress={handleSave}
          color="blue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
    color: 'black',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  pickerContainer: {
    marginVertical: 16, 
    borderRadius: 8, 
  },
  picker: {
    color: 'black', 
    height: 100,
    width: '100%',
  },
  pickerItem:{
     color:'black',
  },
  buttonContainer: {
    marginTop: 85, 
  },
});

export default AddTransactionScreen;
