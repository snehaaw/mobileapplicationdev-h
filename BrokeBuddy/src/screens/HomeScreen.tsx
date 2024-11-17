import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionEntry, TRANSACTION_DATA, TransactionType_bgColor } from '../utils/utility';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  const renderTransaction = ({ item }: { item: TransactionEntry }) => (
    <TouchableOpacity
      style={[styles.transactionCard, { backgroundColor: TransactionType_bgColor[item.type] }]}
      onPress={() => navigation.navigate('Details', { transactionId: item.id })}
    >
      <Text style={styles.transactionTitle}>{item.title}</Text>
      <Text style={styles.transactionAmount}>${item.amount.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={TRANSACTION_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        ListEmptyComponent={<Text style={styles.emptyText}>Add transaction to see entry here</Text>}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddTransaction', { mode: 'add' })}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  transactionCard: { padding: 16, marginVertical: 8, borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 3 },
  transactionTitle: { fontSize: 16, fontWeight: 'bold' },
  transactionAmount: { fontSize: 14, color: 'green', marginTop: 4 },
  fab: { position: 'absolute', right: 16, bottom: 16, backgroundColor: '#20b2aa', width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 },
  fabText: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  emptyText: { color: 'gray', textAlign: 'center', marginTop: 20, fontSize: 20 },
});

export default HomeScreen;
