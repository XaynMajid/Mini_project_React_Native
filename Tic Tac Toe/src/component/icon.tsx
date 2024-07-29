import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { PropsWithChildren } from 'react';

type iconProps = PropsWithChildren<{
name:string
}>
// import icon from "react-native-vector-icon"
const Icon = ({name}:iconProps) => {
 switch (name) {
    case "circle":
     return    <View style={{
        width: 50,
        height: 50,
        borderRadius: 75,
        borderWidth:3,
        borderColor: 'red',
      }}></View>
          

        case "cross":
        return   <View style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'white',
          }}>
            <View style={{
              position: 'absolute',
              top: '50%',
              height: 2,
              width: '100%',
              backgroundColor: 'orange',
            }}></View>
            <View style={{
              position: 'absolute',
              left: '50%',
              width: 2,
              height: '100%',
              backgroundColor: 'orange',
            }}></View>
          </View>
      
        
    default:
      <View style={{
        width: 50,
        height: 50,
        borderRadius: 75,
        borderWidth:3,
        borderColor: 'red',
      }}></View>
    
        break;
 }
}

const styles = StyleSheet.create({})

export default Icon;
