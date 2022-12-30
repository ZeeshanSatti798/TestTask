import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CurrencyConverterScreen from '../screens/CurrencyConverterScreen';
import BaseCurrencyScreen from '../screens/BaseCurrencyScreen';
import OptionsScreen from '../screens/OptionsScreen';
import ThemeScreen from '../screens/ThemeScreen';
import ConversionCurrency from "../screens/CoversionCurrency";

const Stack = createStackNavigator();

function AppStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CurrencyConverter" component={CurrencyConverterScreen} options={{headerShown: false}}/>
            <Stack.Screen name="BaseCurrency" component={BaseCurrencyScreen} />
            <Stack.Screen name="ConversionCurrency" component={ConversionCurrency} />
            <Stack.Screen name="Options" component={OptionsScreen} />
            <Stack.Screen name="Themes" component={ThemeScreen} />
        </Stack.Navigator>
    );
}

export default AppStackNavigator;
