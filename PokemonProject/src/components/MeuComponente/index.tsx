import React, { Component } from "react";
import { View, Text, Button } from 'react-native'

export default class MeuComponente extends Component {

    render() {

        const {navigation} = this.props
        return (
            <View>
                <Text> MeuComponente Inicial</Text>
                <Button title="imagem" onPress={() => {
                    navigation.navigate("imagem", {
                        params:{texto: "Meu Texto"}
                    })
                }}></Button>
            </View>
        )

    }

}