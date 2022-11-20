import { Text, View } from 'react-native';
import React, { Component } from 'react';

import { Botao } from '../../components/BotaoProps'
import styles from './styles'
import { Button, TextInput } from 'react-native-paper';
import ImageComp from '../../components/ImageComp';
export default class Home extends Component {

  state = {
    nome: "Juan"
  }

  mudarNome = () => {
    this.setState({ nome: "Outro Nome" })
  }
  onChangeText = (nome) => {
    this.setState({ nome })
  }


  render() {
    const {  }  = this.props
    return (
      <View style={styles.container}>
        <ImageComp/>
        <Text >{this.state.nome}</Text>
        <TextInput style={styles.textImput} value={this.state.nome} onChangeText={this.onChangeText} />
        <Botao title="Mudar Nome" onPress={this.mudarNome} />
        {/* <Botao title="image" onPress={() => { navigation.push(" ImageComp ")}}/> */}
      </View>
    );
  }
}

