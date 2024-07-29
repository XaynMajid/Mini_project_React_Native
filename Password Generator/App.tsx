import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import * as yup from "yup"
import {Formik} from "formik"
import BouncyCheckbox from "react-native-bouncy-checkbox";
const passwordSchema = yup.object().shape({
passwordLength: yup.number().min(4,"minimum 4 digits are required").max(16,"max 16 digits are allowed").required("length must required")
})

const App = () => {
  const [password,setPassword]=useState("")
  const [ispasswordGenerated,setIspasswordGenerated]=useState(false)
  const [upperCase,setUpperCase]=useState(true)
  const [lowerCase,setLowerCase]=useState(false)
  const [symbols,setSymbols]=useState(false)
  const [numbers,setNumbers]=useState(false)

  const generatePasswrdString =(passwordLength:number)=>{
    let Passwordchars =""
    let lowerCasechars="abcdefghijklmnopqrstuvwxyz"
    let upperCasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numberschars="0123456789"
    let symbolschars="!@#$%^&*()_+"
    
    if(upperCase){
      Passwordchars+= upperCasechars
      }
      if(lowerCase){
        Passwordchars+= lowerCasechars
          }
          
          if(symbols){
            Passwordchars+= symbolschars
              }
              if(numbers){
                Passwordchars+= numberschars
              }
          let generatedPassword= createPassword(Passwordchars,passwordLength)
          setPassword(generatedPassword)
          setIspasswordGenerated(true)
  }

  const createPassword=(characters:string,passwordLength:number)=>{
let result=""
for (let index = 0; index < passwordLength; index++) {
let resIndx= Math.round(Math.random()*characters.length)
result += characters.charAt(resIndx)
}
return result
        }

  const resetPasswordState =()=>{
    setUpperCase(false)
    setLowerCase(false)
    setSymbols(false)
    setNumbers(false)
    setPassword("")
    setIspasswordGenerated(false)
  }
  return (

<ScrollView keyboardShouldPersistTaps="handled">
  <SafeAreaView>
<View style={styles.appContainer}>
<Text style={styles.title}>
  Password Generator
</Text>
<Formik
       initialValues={{ passwordLength:"" }}
       validationSchema={passwordSchema}
       onSubmit={values=>{
        console.log(values);
       generatePasswrdString(+values.passwordLength)
       }} 
     >



       {({
         values,
         errors,
         touched,
         isValid,  //it is coonected with yup validation it automatically get the value if valid(true/false)
         handleReset,
         handleChange,
handleSubmit,
         isSubmitting,
        
       }) => (
        
    <>
    <View style={styles.inputWrapper}>
      <View  style={styles.inputColumn}>
        <Text style={styles.heading}>Password Length</Text>
{
touched.passwordLength && errors.passwordLength && (
  <Text style={styles.errorText}>{errors.passwordLength}</Text>
)
}
  </View>
      <TextInput
 style={styles.inputStyle}
 placeholder='Ex. 8'
 value={values.passwordLength}
onChangeText={  
handleChange("passwordLength")
}
keyboardType='numeric'
/>
    </View>

    <View style={styles.inputWrapper}>
      <Text style={styles.heading}>Lower Case</Text>
      <BouncyCheckbox

  fillColor="green"
 isChecked={lowerCase}
 onPress={()=>{setLowerCase(!lowerCase)}}
 
/>
    </View>
    <View style={styles.inputWrapper}>
<Text style={styles.heading}>
  UpperCase
</Text>
<BouncyCheckbox
fillColor='blue'
isChecked={upperCase}
onPress={()=>{setUpperCase(!upperCase)}}
/>
    </View> 

    <View style={styles.inputWrapper}>
      <Text style={styles.heading}>
        Symbols
      </Text>
      <BouncyCheckbox
      fillColor='orange'
      isChecked={symbols}
      onPress={()=>{setSymbols(!symbols)}}
      />
    </View>
    
    <View style={styles.inputWrapper}>
      <Text style={styles.heading}>Numbers</Text>
      <BouncyCheckbox
      fillColor='purple'
      isChecked={numbers}
      onPress={()=>{setNumbers(!numbers)}}
      />
    </View>
    <View style={styles.formActions  }>
<TouchableOpacity
disabled={!isValid}
style={styles.primaryBtn}
onPress={()=>{
  handleSubmit()
}}
>
  <Text style={styles.primaryBtnTxt }>
    Generate Password
  </Text>
</TouchableOpacity>
<TouchableOpacity 
style={styles.secondaryBtn }
onPress={()=>{
handleReset();
resetPasswordState();
}} 
>
  <Text style={styles.secondaryBtnTxt }>
   Reset
  </Text>
</TouchableOpacity>
    </View>
    </>
        
       )}
     </Formik>
</View>

  {
    ispasswordGenerated ? 
    (
    
    <View style={[styles.card,styles.cardElevated]}>

<Text style={styles.subTitle}>
  Result:
</Text>
<Text style={styles.description}>Long Press to copy</Text>
<Text selectable={true} style={styles.generatedPassword }>{password}</Text>
</View>
    
    ):null
    
  }

  </SafeAreaView>
</ScrollView>

    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 15,
    padding:10,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
    marginLeft:20,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '18%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
    marginRight:5,
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    marginTop:15,
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});

export default App;
