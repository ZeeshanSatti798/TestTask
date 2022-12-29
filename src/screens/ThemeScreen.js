import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ThemeScreen = (props) => {
    return (
        <View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', backgroundColor: 'white', borderBottomWidth: 0.4, borderColor: 'grey' }}
                onPress={() => props.navigation.navigate('CurrencyConverter',{color:"blue"})}
            >
                <Text style={{color:'#000'}}>
                    Blue
                </Text>
                <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'blue' }} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('CurrencyConverter',{color:"orange"})}
                style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', backgroundColor: 'white', borderBottomWidth: 0.4, borderColor: 'grey' }}>
                <Text style={{color:'#000'}}>
                    Orange
                </Text>
                <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'orange' }} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('CurrencyConverter',{color:"green"})}
                style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', backgroundColor: 'white', borderBottomWidth: 0.4, borderColor: 'grey' }}>
                <Text style={{color:'#000'}}>
                    Green
                </Text>
                <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'green' }} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('CurrencyConverter',{color:"grey"})}
                style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', backgroundColor: 'white', borderBottomWidth: 0.4, borderColor: 'grey' }}>
                <Text style={{color:'#000'}}>
                    Purple
                </Text>
                <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'grey' }} />
            </TouchableOpacity>
        </View>
    )
}

export default ThemeScreen

const styles = StyleSheet.create({})
