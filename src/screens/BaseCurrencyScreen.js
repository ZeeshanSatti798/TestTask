import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import React from 'react'

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

const BaseCurrencyScreen = ({navigation,route}) => {

    const row = (currency, index) => {
        return (
            <TouchableHighlight onPress={()=>{
                if(route?.params?.data=="first"){
                    navigation.navigate("CurrencyConverter",{currencyName1:currency})
                }else {
                    navigation.navigate("CurrencyConverter",{currencyName2:currency})
                }
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
