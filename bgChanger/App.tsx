import React, { useState } from 'react';
import { StyleSheet, View,Text, StatusBar, TouchableOpacity,  } from 'react-native';

const App = () => {
  const  [bgColor, setBgColor] = useState("");
  const changeBg=()=>{
   const  hexDigits="0123456789ABCDEF"
  let bgColor="#"
   for (let index = 0; index < 6; index++) {
  bgColor+= hexDigits[ Math.floor(Math.random()*16)] // we cant use math.round here bcz sometimes the number will be 15.(greater than 5) then it will convert it into 16. and 16 index is not in hexdigit array
   }
   console.log(bgColor)
setBgColor(bgColor)
  }
  return (
  <>
    
  <View style={styles.container}>
<TouchableOpacity onPress={changeBg}>
  <Text style={[styles.btn,{backgroundColor:bgColor}]}>
    Click it
  </Text>
</TouchableOpacity>

  </View>
  
  </>
  );
}

const styles = StyleSheet.create({
container:{
flex:1,   //   if you give this 1 it will take the full height+width of the page
alignItems:"center",
justifyContent:"center"
},
btn:{
  borderRadius:12,
  backgroundColor:"red",
  padding:13,
  width:"20%",
}



}



)

export default App;
