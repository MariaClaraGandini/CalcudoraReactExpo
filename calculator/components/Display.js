import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ColorPropType } from 'react-native';

export default function Display({ valor, res }) {
  return (
    <View style={styles.display}>
      <Text
         style={styles.textoDisplayOper}
         numberOfLines={1}
          >{valor}
      </Text> 
      <Text
         style={styles.textoDisplayRes}
         numberOfLines={1}
          >{res}
      </Text> 
    </View>

  );
}

const styles= StyleSheet.create({
  display:{
    flex:1,
    padding:20,
    justifyContent:'center',
    alignItems:'flex-end',
    backgroundColor:'#000',
    width:'100%'
    
  },
  textoDisplayRes:{
    fontSize:50,
    color:'#fff',
  },
  textoDisplayOper:{
    fontSize:25,
    color:'#fff', 
  },

})