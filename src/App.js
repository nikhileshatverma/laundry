import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/screens/Dashboard';
import Packages from './src/screens/Packages';
import OrderSummary from './src/screens/OrderSummary';
import Payment from './src/screens/Payment';
import OrderTracking from './src/screens/OrderTracking';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Packages" component={Packages} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="OrderTracking" component={OrderTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
