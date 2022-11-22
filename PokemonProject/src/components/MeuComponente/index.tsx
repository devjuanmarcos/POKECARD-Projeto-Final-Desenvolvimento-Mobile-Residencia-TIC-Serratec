import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";

export default class MeuComponente extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.header}>
        <Text> Meu Componente Inicial</Text>
        <Button
          title="imagem"
          onPress={() => {
            navigation.navigate("imagem", {
              params: { texto: "asdasdasdasda sdasdas dasdasdasd" },
            });
          }}
        ></Button>
      </View>
    );
  }
}
