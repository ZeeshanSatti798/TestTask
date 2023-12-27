import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './src/navigators/AppStackNavigator';
import {Provider} from "react-redux";
import {store} from "./src/store/store";

export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
              <AppStackNavigator />
          </NavigationContainer>
      </Provider>
  );
}
