import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import CurrencyConverter from './components/currencyConverter';
import {currencyByRupee} from "./constants"
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const App = ():JSX.Element => {
  const [inputValue,setInputValue]=useState("")
  const [resultValue,setResultValue]=useState("")
  const [targetCurrencyName,setTargetCurrencyName]=useState("")   // only created for matching name while looping this component
  
  
  // button press is getting value of array while calling
  const buttonPress =( wantedCurrency  : Currency)=>{
    if(!inputValue){
      return Snackbar.show({
text:"Enter a value to convert",
backgroundColor:"#EA7773",
textColor:"#000000"
      })
    }
    let FloatConvertedInput= parseFloat(inputValue);
    if(!isNaN(FloatConvertedInput)){
    let convertedValue = FloatConvertedInput * wantedCurrency.value;
  let result =`${wantedCurrency.symbol} ${convertedValue.toFixed(2)}`
  setResultValue(result)
  setTargetCurrencyName(wantedCurrency.name) // later helpful for matching in styling
  }
  else{
return Snackbar.show({
text:"Not a valid Number",
backgroundColor:"#EA7773",
textColor:"#000000",

}

)
  }
  ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  return (
  <>
           
      <StatusBar/>
<View style={styles.container}>
  <View style={styles.topContainer}>
    <View style={styles.rupeesContainer} >
 <Text style={styles.rupee}>Pkr</Text>
 <TextInput 
 style={styles.inputAmountField}
      maxLength={14}
      value={inputValue}
      onChangeText={setInputValue}
keyboardType='numeric'
      placeholder='Enter a value to convert'
      />
 </View>
 {
        resultValue && (
          <Text style={styles.resultTxt}>
            {resultValue}
          </Text>
        )
      }   
  </View>
  <View style={styles.bottomContainer}>
     <FlatList
     numColumns={3}
     data={currencyByRupee}
     keyExtractor={item=>item.name}
     renderItem={({item})=>(
<Pressable
style={[
  styles.button,
  targetCurrencyName === item.name && styles.selected
]
}
onPress={()=>buttonPress(item)}
>
<CurrencyConverter {...item} />
</Pressable>
     )}
     />

    </View>
</View>
     </>
  );
}












const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#ffffff',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    color:"#000000",
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 80,
    justifyContent:"center",

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
