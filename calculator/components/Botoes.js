import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

export default function Botoes(props) {
  const estilobotoes=[styles.btn]

  if(props.duplo){
    estilobotoes.push(styles.btnduplo)
  } 
  if(props.igual){
    estilobotoes.push(styles.btnigual)
  }
  if(props.operacao){
    estilobotoes.push(styles.btnoper)
  }
  if(props.ac){
    estilobotoes.push(styles.btnac)
  }
  if(props.bs){
    estilobotoes.push(styles.btnbs)
  }
  return (
<TouchableOpacity onPress={props.Click}>
  <Text style={estilobotoes}>{props.label}</Text>
</TouchableOpacity>

  );
}

const styles= StyleSheet.create({

  btn:{
    fontSize:30,
    height:Dimensions.get('window').width/4,
    width:Dimensions.get('window').width/4,
    padding:20,
    color:"#ffff",
    backgroundColor:"#000",
    borderColor:"#777",
    textAlign:'center',
  },
  btnoper:{
    color:'#0f0',

  },
  btnigual:{
    color:'#f00',
  },
  btnac:{
    color:'#ff0',
  },
  btnbs:{
    color:'#0ff',
  },
  btnduplo:{
    width:Dimensions.get('window').width/2,
  },

})