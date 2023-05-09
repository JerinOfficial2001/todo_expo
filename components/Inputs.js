import { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function Inputs({submitHandler}) {
    const [text, setText] = useState('');
    const submit = () =>{
      if(text !==""){
        submitHandler(text)
      }
      setText("")
    }
    const changeHandler = (val)=>{
setText(val)
    }
  return (
    <View style={styles.card}>
   <TextInput
        style={styles.input}
        onChangeText={changeHandler}
        value={text}
        placeholder="type here..."
        keyboardType="default"
      />
      <Button
  title="ADD"
  color="#841584"
  onPress={()=>{submit()}}
/>
  </View>
  )
}
const styles = StyleSheet.create({
    card: {
      height:60,
      width:350,
      backgroundColor:'#babdc1',
      position:"relative",
    top:30,
    borderRadius:5,
    display:'flex',
alignItems:"center",
justifyContent:'center',
flexDirection:'row',
gap:5,
marginBottom:10
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width:"80%",
        borderRadius:5
      },
})