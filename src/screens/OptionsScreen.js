import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const OptionsScreen = (props) => {
    return (
        <View>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', backgroundColor: 'white', borderBottomWidth: 0.4, borderColor: 'grey' }}
                onPress={() => {
                    props.navigation.navigate('Themes')
                }}
            >
                <Text>
                    Themes
                </Text>
                <Image source={require('../assets/arrow.png')} style={{ width: 20, height: 20, }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', backgroundColor: 'white', borderBottomWidth: 0.4, borderColor: 'grey' }}>
                <Text>
                    Fixer.io
                </Text>
                <Image source={require('../assets/chain.png')} style={{ width: 20, height: 20, }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', backgroundColor: 'white', borderBottomWidth: 0.4, borderColor: 'grey' }}>
                <Text>
                    Logout
                </Text>
                <Image source={require('../assets/arrow-left.png')} style={{ width: 20, height: 20, }} />
            </TouchableOpacity>
        </View>
    )
}

export default OptionsScreen

const styles = StyleSheet.create({})