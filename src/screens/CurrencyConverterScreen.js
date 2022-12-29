import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const CurrencyConverterScreen = (props) => {
    return (
        <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#496e7b' }}>
            <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 20 }} onPress={() => {
                    props.navigation.navigate('Options')
            }}>
                <Image source={require('../assets/settings.png')} style={{ width: 20, height: 20, tintColor: 'white' }} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text style={{ alignSelf: 'center', marginBottom: 20, fontSize: 25, fontWeight: 'bold', color: 'white' }}>Currency Converter</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('Base Currency') }}>
                        <View style={{ height: 40, left: 0, width: 60, backgroundColor: 'white' }} />
                    </TouchableOpacity>
                    <TextInput
                        style={{ border: 1, width: '80%', height: 40, backgroundColor: 'white', alignSelf: 'center', marginBottom: 30, opacity: 0.9 }}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Base Currency')}}>
                        <View style={{ height: 40, left: 0, width: 60, backgroundColor: 'white' }} />
                    </TouchableOpacity>
                    <TextInput
                        style={{ border: 1, width: '80%', height: 40, backgroundColor: 'white', alignSelf: 'center', opacity: 0.9 }}
                    />
                </View>
                <Text style={{ alignSelf: 'center', marginBottom: 20, fontSize: 15, color: 'white', marginTop: 20 }}>1 usd = 0.2323 as of Sep 23</Text>
                <TouchableOpacity onPress={() => {
                    // props.navigation.navigate('Base Currency')
                }}>
                    <Text style={{ alignSelf: 'center', marginBottom: 20, fontSize: 15, color: 'white', marginTop: 20 }}>Currency Converter</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default CurrencyConverterScreen

const styles = StyleSheet.create({})