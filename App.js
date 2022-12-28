import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './src/navigators/AppStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
