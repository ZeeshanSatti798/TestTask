import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Animated, Keyboard} from 'react-native'
import React, {useEffect, useState} from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrencyExchangeRate} from "../store/actions";

const CurrencyConverterScreen = ({navigation,route}) => {
    const [currency1, setCurrency1] = useState("");
    const [currencyName1, setCurrencyName1] = useState("USD");
    const [currencyName2, setCurrencyName2] = useState("EUR");
    const [currency2, setCurrency2] = useState("");
    const [logoAnimation] = useState(new Animated.Value(0));
    const { currency } = useSelector(state => state);
    const exchangeRate = useSelector(state => state.currency.result);
    // console.log("currency:",currency?.result)
    const dispatch = useDispatch();

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                Animated.timing(logoAnimation, {
                    toValue: -45,
                    duration: 1000,
                    useNativeDriver: false,
                }).start();
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                Animated.timing(logoAnimation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                }).start();
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    useEffect(() => {
        console.log(route?.params?.currencyName1)
        if(route?.params?.currencyName1!==undefined){
            setCurrencyName1(route?.params?.currencyName1)
        }

    }, [currency]);


    const convert=()=>{
        dispatch(fetchCurrencyExchangeRate(currencyName1, currencyName2,currency1));
        // setCurrency2(exchangeRate?.result)
        setCurrency2(127)
        console.log("exchangeRate:",exchangeRate?.result)
    }

    return (
        <View style={{ flex: 1, paddingTop: 40, backgroundColor: route?.params?.color==undefined?'#496e7b': route?.params?.color}}>
            <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 20 }} onPress={() => {
                    navigation.navigate('Options')
            }}>
                <Image source={require('../assets/settings.png')} style={{ width: 25, height: 25, tintColor: 'white' }} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Animated.View style={{alignItems:'center', transform: [{ translateY: logoAnimation }] }}>
                    <Image style={{width:120,height:120}} tintColor={'#fff'} source={require('../assets/icons8-currency-exchange-100.png')} />
                </Animated.View>
                <Text style={{ alignSelf: 'center', marginTop: 50, fontSize: 25, fontWeight: 'bold', color: 'white' }}>Currency Converter</Text>
                <View style={{ flexDirection: 'row', marginHorizontal: 20,marginTop: 20 }}>
                    <TouchableOpacity onPress={() => {navigation.navigate('BaseCurrency',{data:"first"})}}>
                        <View style={styles.currencyNameView} >
                            <Text style={{color:route?.params?.color==undefined?'#496e7b': route?.params?.color,fontWeight:'bold',fontSize:18}}>{currencyName1}</Text>
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
                    <TouchableOpacity onPress={() => {navigation.navigate('BaseCurrency',{data:"second"}) }}>
                        <View style={styles.currencyNameView} >
                            <Text style={{color:route?.params?.color==undefined?'#496e7b': route?.params?.color,fontWeight:'bold',fontSize:18}}>{currencyName2}</Text>
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        // onChangeText={setCurrency1}
                        value={currency1}
                        keyboardType={'number-pad'}
                    />
                </View>
                <Text style={{ alignSelf: 'center', marginBottom: 20, fontSize: 15, color: 'white', marginTop: 20 }}>1 usd = 0.2323 as of Sep 23</Text>
                <TouchableOpacity
                    style={{ marginTop: 20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}
                    onPress={() => {
                        convert();
                    // props.navigation.navigate('Base Currency')
                }}>
                    <AntDesign name={"retweet"} color={"#fff"} size={22}/>
                    <Text style={{ marginLeft: 15, fontSize: 15, color: 'white', }}>Reverse Currencies</Text>
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
