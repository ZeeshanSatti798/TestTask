import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import React from 'react'
import {useDispatch} from "react-redux";
import {selectCurreny} from "../store/actions";

const currencies = [
    'AUD',
    'USD',
    'BGN',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'CZK',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'HRK',
]

const BaseCurrencyScreen = ({navigation,route}) => {
    const dispatch = useDispatch();

    const row = (currency, index) => {
        return (
            <TouchableHighlight onPress={()=>{
                dispatch(selectCurreny(currency))
                navigation.navigate("CurrencyConverter")
            }} key={index}
                                style={{ height: 40, justifyContent: 'center', marginLeft: 20 }}
            >
                <Text style={{color:'#000'}}>{currency}</Text>
            </TouchableHighlight>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <ScrollView>
                {currencies.map((item, index) => row(item, index))}
            </ScrollView>
        </View>
    )
}

export default BaseCurrencyScreen

const styles = StyleSheet.create({})
