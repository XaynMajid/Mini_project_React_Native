import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './main';
import Naviagtions from './naviagtions';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { addProducts } from './slices/productSlice';
//  {/* <Main/> */}

productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:  require("./assets/images.jpg"),
    qty: 10,
    brand: "AudioMax"
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 199.99,
    image:  require("./assets/smartWatch.jpg"),
    qty: 0,
    brand: "TechTime"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 49.99,
    image:  require("./assets/BluetoothSpeaker.jpg"),
    qty: 20,
    brand: "SoundWave"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 59.99,
    image:  require("./assets/GamingMouse.jpg"),
    qty: 30,
    brand: "GamerPro"
  },
  {
    id: 5,
    name: "4K Monitor",
    price: 299.99,
    image: require("./assets/4KMonitor.jpg"),
    qty: 6,
    brand: "UltraView"
  }
];

const App = () => {
  const dispatch = useDispatch();
const product= useSelector(state=>state.product)
console.log(product);
  useEffect(() => {
    if(product.length==0){
      productsData.map(item => {
        dispatch(addProducts(item));
      });
    }
   
  }, []);
  return (
     <Naviagtions />
  );
}


export default App;
