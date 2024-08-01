import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { useDispatch, useSelector } from 'react-redux';
import {  addProducts } from './slices/productSlice';
import CartScreen from './screens/cartScreen';
// import { products } from './constants';


const Stack =createNativeStackNavigator()
const Naviagtions = () => {

    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{
            headerShown:false
          }}>
          <Stack.Screen name='HomeScreen' component={HomeScreen} 
          />
           <Stack.Screen name='cart' component={CartScreen} 
          />
        </Stack.Navigator>
       </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Naviagtions;
