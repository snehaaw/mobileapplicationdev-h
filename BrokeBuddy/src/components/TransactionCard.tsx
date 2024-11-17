import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionEntry, TransactionType_bgColor } from '../utils/utility';

interface TransactionCardProps {
  transaction: TransactionEntry;
  onPress: () => void;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, { backgroundColor: TransactionType_bgColor[transaction.type] || '#add8e6' }]}
    >
      <View style={styles.cardContent}>
        <Text style={styles.title}>{transaction.title}</Text>
        <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
        <Text style={styles.description}>{transaction.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12, 
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    backgroundColor: '#add8e6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  cardContent: {
    alignItems: 'center', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 6,
    textAlign: 'center',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 6,
    textAlign: 'center', 
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center', 
  },
});

export default TransactionCard;
