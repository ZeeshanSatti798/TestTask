import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const currencies = [
    'ASD',
    'USD',
    'SAD',
    'OPI',
    'ASD',
    'ASD',
    'ASD',
    'ASD',
    'ASD',
    'ASD',
    'ASD',
    'ASD',
    'ASD',
    'ASD',
]

const BaseCurrencyScreen = props => {

    const row = (currency, index) => {
        return (
            <View key={index} style={{ height: 40, justifyContent: 'center', marginLeft: 20 }}>
                <Text style={{color:'#000'}}>{currency}</Text>
            </View>
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
