import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import React from 'react'
import {useDispatch} from "react-redux";
import {convertCurrency, selectCurreny} from "../store/actions";

const currencies = [
    'AUD',
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

const ConversionCurrency = ({navigation,route}) => {
    const dispatch = useDispatch();

    const row = (currency, index) => {
        return (
            <TouchableHighlight onPress={()=>{
                dispatch(convertCurrency(currency))
                navigation.navigate("CurrencyConverter")
            }} key={index}
                                style={styles.currencyText}
            >
                <Text style={{color:'#000'}}>{currency}</Text>
            </TouchableHighlight>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {currencies.map((item, index) => row(item, index))}
            </ScrollView>
        </View>
    )
}

export default ConversionCurrency;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20
    },
    currencyText:{
        height: 40,
        justifyContent: 'center',
        marginLeft: 20
    }
})
