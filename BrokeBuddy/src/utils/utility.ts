import uuid from 'react-native-uuid';

export const TransactionType_bgColor = ['#C9E9D2', '#FFCFB3', '#CAF4FF'];

export enum TransactionType {
  Essential = 0,
  Leisure,
  Others,
}

export interface TransactionEntry {
  id: string;
  title: string;
  amount: number;
  desc: string;
  type: TransactionType;
}

export function getNewID(): string {
  return uuid.v4() as string;
}

export const TRANSACTION_DATA: TransactionEntry[] = [];

export function addEditTransaction(entry: TransactionEntry) {
  const index = TRANSACTION_DATA.findIndex((t) => t.id === entry.id);
  if (index !== -1) {
    TRANSACTION_DATA[index] = entry;
  } else {
    TRANSACTION_DATA.push(entry);
  }
}

export function getTransactionByID(id: string): TransactionEntry | undefined {
  return TRANSACTION_DATA.find((t) => t.id === id);
}
