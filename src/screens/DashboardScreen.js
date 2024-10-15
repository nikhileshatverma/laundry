import React from 'react';
import { View, Text, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Laundry App!</Text>
      <Button title="Explore Packages" onPress={() => navigation.navigate('Packages')} />
    </View>
  );
};

export default DashboardScreen;
