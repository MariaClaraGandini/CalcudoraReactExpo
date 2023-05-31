import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Display from './components/Display';
import Btn from './components/Botoes';

export default function App() {
  const [valortela, setValorTela] = useState('');
  const [resultado, setResultado] = useState(0);
  const [ponto, setPonto] = useState(false);
  const [operado, setOperado] = useState(false);

  const addDigito = (digito) => {
    if (digito === '+' || digito === '-' || digito === '*' || digito === '/') {
      setPonto(false);
    }

    if (digito === '.' && !ponto) {
      setPonto(true);
      setOperado(false);
    } else if (digito === '.' && ponto) {
      return;
    }

    setValorTela((valorAtual) => valorAtual + digito);
    setOperado(false);
  };

  const limparTela = () => {
    setValorTela('');
    setResultado(0);
    setPonto(false);
    setOperado(false);
  };

  const retroceder = () => {
    setValorTela((valorAtual) => valorAtual.slice(0, -1));
  };

  const operar = (digito) => {
    if (digito === 'AC') {
      limparTela();
      return;
    }
    if (digito === 'BS') {
      retroceder()
      return;
    }
    try {
      const resultadoCalculo = eval(valortela);
      setResultado(resultadoCalculo);
      setOperado(true);
    } catch {
      setResultado('Erro');
      setOperado(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
        <Display valor={valortela} res={resultado}></Display>
        <View style={styles.botoes}>
        <Btn label="AC" ac Click={()=>{operar('AC')}} />
        <Btn label="(" Click={()=>{addDigito('(')}} />
        <Btn label=")" Click={()=>{addDigito(')')}} />
        <Btn label="/" operacao Click={()=>{addDigito('/')}} />
        <Btn label="7" Click={()=>{addDigito('7')}} />
        <Btn label="8" Click={()=>{addDigito('8')}} />
        <Btn label="9" Click={()=>{addDigito('9')}} />
        <Btn label="*" operacao Click={()=>{addDigito('*')}} />
        <Btn label="4" Click={()=>{addDigito('4')}} />
        <Btn label="5" Click={()=>{addDigito('5')}} />
        <Btn label="6" Click={()=>{addDigito('6')}} />
        <Btn label="-" operacao Click={()=>{addDigito('-')}} />
        <Btn label="1" Click={()=>{addDigito('1')}} />
        <Btn label="2" Click={()=>{addDigito('2')}} />
        <Btn label="3" Click={()=>{addDigito('3')}} />
        <Btn label="+" operacao Click={()=>{addDigito('+')}} />
        <Btn label="." operacao Click={()=>{}} />
        <Btn label="<=" bs Click={()=>{retroceder()}} />
        <Btn label="=" igual Click={()=>{operar('=')}} />

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
 
  botoes:{
    flexDirection:'row',
    flexWrap:'wrap',
  }
});
