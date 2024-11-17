import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getTransactionByID, TransactionEntry } from '../utils/utility';

const DetailsScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { transactionId } = route.params;
  const transaction = getTransactionByID(transactionId);

  if (!transaction) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Transaction not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{transaction.title}</Text>
      <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
      <Text style={styles.desc}>{transaction.desc}</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate('AddTransaction', { mode: 'edit', transaction })}
        color="blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 16,
    backgroundColor: '#add8e6',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  amount: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#444',
  },
  desc: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});

export default DetailsScreen;
