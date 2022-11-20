import { Text, TextInputComponent, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import {Botao} from '../../components/BotaoProps'
import styles from './styles'
import { TextInput } from 'react-native-paper';
export default class Home extends Component {

  state = {
    nome: "Juan"
  }

  mudarNome = () => {
    this.setState({nome:"Outro Nome"})
  }
  onChangeText = (nome) => {
    this.setState({nome})
  }



  render() {
    return (
      <View style={styles.container}>
        <Text >{this.state.nome}</Text>
        <TextInput style={styles.textImput} value={this.state.nome} onChangeText={this.onChangeText}/>
        <Botao title="Mudar Nome" onPress={this.mudarNome}/>
      </View>
    );
  }
}

