import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import DetailsScreen from './screens/DetailsScreen';
import { RouteProp } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { TransactionEntry } from './utils/utility';

enableScreens();  

export type RootStackParamList = {
  Home: undefined;
  AddTransaction: { mode?: 'edit' | 'add'; transaction?: TransactionEntry };
  Details: { transactionId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator id={undefined}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Transactions', headerTintColor: 'red' }}
      />
      <Stack.Screen
        name="AddTransaction"
        component={AddTransactionScreen}
        options={({ route }: { route: RouteProp<RootStackParamList, 'AddTransaction'> }) => ({
          title: route.params?.mode === 'edit' ? 'Update Transaction' : 'Add Transaction',
          headerTintColor: 'red',
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details', headerTintColor: 'red' }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
