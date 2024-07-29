import React from 'react';
import type { PropsWithChildren } from 'react';
import { View,Text, StyleSheet} from "react-native"

type CurrencyProps = PropsWithChildren<{
name:string,    // we assign here only 2 things bcz we only wwant 2 of them to display
flag:string
}>


const CurrencyConverter = (props:CurrencyProps):JSX.Element => {
    return (
      <View style={Styles.container}>
<Text style={Styles.flag}>{props.flag}</Text>
<Text style={Styles.countryName}>{props.name}</Text>
      </View>
    );
}

const Styles=StyleSheet.create({
    container:{
        alignItems:"center",
    },
    flag:{
    fontSize:28,
    marginBottom:10,
},
countryName:{
    fontSize:12,
    color:"black"
}

})


export default CurrencyConverter;
