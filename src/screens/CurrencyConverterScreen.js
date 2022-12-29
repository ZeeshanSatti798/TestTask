import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const CurrencyConverterScreen = ({navigation,route}) => {
    const [currency1, setCurrency1] = useState("");
    const [currency2, setCurrency2] = useState("");

    return (
        <View style={{ flex: 1, paddingTop: 40, backgroundColor: route?.params?.color==undefined?'#496e7b': route?.params?.color}}>
            <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 20 }} onPress={() => {
                    navigation.navigate('Options')
            }}>
                <Image source={require('../assets/settings.png')} style={{ width: 20, height: 20, tintColor: 'white' }} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text style={{ alignSelf: 'center', marginBottom: 20, fontSize: 25, fontWeight: 'bold', color: 'white' }}>Currency Converter</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => {navigation.navigate('BaseCurrency') }}>
                        <View style={styles.currencyNameView} >
                            <Text style={{color:route?.params?.color==undefined?'#496e7b': route?.params?.color,fontWeight:'bold',fontSize:18}}>USD</Text>
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={setCurrency1}
                        value={currency1}
                        keyboardType={'number-pad'}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => {navigation.navigate('BaseCurrency') }}>
                        <View style={styles.currencyNameView} >
                            <Text style={{color:route?.params?.color==undefined?'#496e7b': route?.params?.color,fontWeight:'bold',fontSize:18}}>GBP</Text>
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={setCurrency2}
                        value={currency2}
                        keyboardType={'number-pad'}
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

export default CurrencyConverterScreen;

const styles = StyleSheet.create({
    input:{
        border: 1,
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginBottom: 30,
        opacity: 0.9,
        color:'#000'
    },
    currencyNameView:{
        height: 40, left: 0, width: 60, backgroundColor: 'white',justifyContent:'center',alignItems:'center'
    }
})
