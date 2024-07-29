import React, { useState } from 'react';
import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icon from './component/icon';

const App = () => {
  const [isCross,setIsCross]= useState(false)
  const [gameWinner,setGameWinner]= useState("")
  const [gameState,setGameState]= useState(new Array (9).fill("empty",0,9))
  
  let gameReload=()=>{
    setIsCross(false)
setGameWinner("")
setGameState(new Array (9).fill("empty",0,9))
console.log("Hi");
  }
  const checkIsWinner = () => {
    // console.log("win");
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
   
     
    }
  
  const onChange =(number:number)=>{
    console.log(number);
if(gameState[number]=== 'empty')
  {
    gameState[number]=isCross ? "cross" : "circle" 
    setIsCross(!isCross)
  }
  else{
Snackbar.show({
  text:"Place is already filled",
  backgroundColor:"white",
  textColor:"black"
})
}
// console.log(gameState[number]);
checkIsWinner()
console.log(gameWinner);
  }
  return (
  <SafeAreaView>
<StatusBar/>
{gameWinner ?(
  <View style={[styles.playerInfo,styles.winnerInfo]}>
    <Text style={styles.winnerTxt}>
      {gameWinner}
    </Text>
  </View>
) :(
  <View style={[styles.playerInfo, isCross ? styles.playerX : styles.playerO]}>
    <Text style={styles.gameTurnTxt}>Its player {isCross ? 'X' : 'O'}'s turn</Text>
  </View>
)}
<FlatList
data={gameState}
numColumns={3}
style={styles.grid}
renderItem={({item,index})=>(
<Pressable
key={index}   //return index of pressed box
style={styles.card}
onPress={()=>onChange(index)}
>
  
<Icon name={item}/>

</Pressable>

)}
/>
<View>
  <TouchableOpacity  onPress={gameReload}>
    <View style={styles.gameBtn}>
    <Text  style={styles.gameBtnText}>Reload</Text>
    </View>
  </TouchableOpacity>
</View>

  </SafeAreaView>

);
}
const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',
    // backgroundColor:"crimson",

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 4,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 50,
    // width:120,
    margin:"auto",
    marginVertical:20,
    backgroundColor: 'orange',
  },
  gameBtnText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default App;

