import React, { Component, useState } from 'react';
import { Text,StyleSheet, View, FlatList, TouchableOpacity, Button, Pressable } from 'react-native';
import {Joke} from '../components'

const App = ():JSX.Element => {
  const handlePress =()=>{
    let result= Math.floor( Math.random()*Joke.length) 
setJokeVal(result)
  }
  const [jokeVal,setJokeVal]=useState<number>(0)
  return (
    
//  <View style={styles.main}>
// <FlatList
// numColumns={1}
// data={joke}
// keyExtractor={item=>item.joke}
// renderItem={({item})=>(
// <View style={styles.container}>
//  <Text style={styles.center} >
// {item.joke}
// </Text>
// <Text style={styles.center}>
// {item.emoji}
// </Text> 
//  <Pressable onPress={handlePress}>
//   <Text>Next</Text>
// </Pressable>
// </View>
// )
// }
// /> 
// </View>

<View >
<View style={styles.container} >
  <Text style={styles.center} >
  {
   Joke[jokeVal].joke
  }
  </Text>
  <Text style={styles.center}>
  {
    Joke[jokeVal].emoji
  }
  </Text>
</View>
<View >
 <TouchableOpacity style={styles.btn} onPress={handlePress}>
  <Text style={styles.center}>
Next
  </Text>
 </TouchableOpacity>
 </View>
 </View>
)
}


const styles = StyleSheet.create({
  main:{
// alignItems:"center",  // it aligns but does'nt in center so i use margin:auto instead
// backgroundColor:"black"
  },
  container:{
    
width:"70%",
margin:"auto",
borderRadius:8,
marginTop:40,
backgroundColor:"red",
},
  center:{
textAlign:"center",
fontSize:25
  },
btn:{
paddingHorizontal:40,
paddingVertical:20,
backgroundColor:"green",
width:"70%",
margin:"auto",
borderRadius:8,
marginTop:20
}



})

export default App;
