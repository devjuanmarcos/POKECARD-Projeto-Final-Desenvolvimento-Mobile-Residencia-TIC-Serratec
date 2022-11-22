import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

export default class ImageComp extends Component {
  UNSAFE_componentWillMount = () => {
    const { texto } = this.props.route.params.params;
    this.setState({ texto });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.texto}</Text>
        <Image
          style={styles.imagemTamanho}
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
        />
      </View>
    );
  }
}
