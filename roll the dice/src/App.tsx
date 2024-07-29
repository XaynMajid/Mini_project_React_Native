// import type {PropsWithChildren} from 'react';
import React, { PropsWithChildren, useState } from 'react';  // this is necessary for using JSx Element
import { StyleSheet, View,Text,Image,ImageSourcePropType, TouchableOpacity } from 'react-native';

import One from "../assets/One.png"
import Two from "../assets/Two.png"
import Three from "../assets/Three.png"
import Four from "../assets/Four.png"
import Five from "../assets/Five.png"
import Six from "../assets/Six.png"
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType, // ':' = '='   PropsWithChildren<{}> syntax by chai or code but it gives some error and chat gpt remove it by itself
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
  const Dice = ({ imageUrl }: DiceProps): JSX.Element => {  // take care of the braces not '{}'   using '()' we can create it even without using JSX.Element and if we use return() then we can this braces {}
    return(
      <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
    )
  }

//   const Sum =({ a }: { a: number })=>(    //  components for practice 
//   <View>
// <Text style={styles.sumBox}>
// {a+5}
// </Text>
//   </View>
//   )  
//   const Sum2 =({ b }: { b: string })=>(
//     <View>
//   <Text style={styles.sumBox}>
//   {b}
//   </Text>
//     </View>
//     ) 
const App = ():JSX.Element => {
const [diceRoller,setDiceRoller]=useState<ImageSourcePropType>(One)
const diceRoll =()=>{
  let randomNumDice = Math.floor(Math.random()*6)+1  // we cant use 7 here bcz it gives us the values b/w 0 to 6 but we want it b/w 1 to 6
  console.log(randomNumDice);
  switch (randomNumDice) {
    case 1:
      setDiceRoller(One)
      break;
      case 2:
      setDiceRoller(Two)
      break;
      case 3:
        setDiceRoller(Three)
        break;
        case 4:
          setDiceRoller(Four)
          break;
          case 5:
            setDiceRoller(Five)
            break;
            case 6:
              setDiceRoller(Six)
              break;
    default:
      setDiceRoller(One)
  
      break;
  }
  ReactNativeHapticFeedback.trigger("impactLight", options);
}

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceRoller} />
      {/* <Image source={One} style={styles.diceImage} />   you can image by using this as well */}
       {/* <Sum a={5}/>
      <Sum2 b={"zain majid"} />   // components for practice */}
      <View>
        <TouchableOpacity style={styles.btn} onPress={diceRoll}>
<Text style={styles.btnText}>Roll the Dice</Text>
        </TouchableOpacity>    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:"center",
alignItems:"center",
  },
  diceImage:{
width:200,
height:200
  },
  btn:{
// backgroundColor:"crimson",
paddingVertical:5,
paddingHorizontal:20,
borderRadius:8,
marginTop:10,
width: 200,
borderWidth: 1,
borderColor: 'crimson',
  },
  btnText:{
    
    fontSize:20,
    textAlign:"center"
  }
})

export default App;

