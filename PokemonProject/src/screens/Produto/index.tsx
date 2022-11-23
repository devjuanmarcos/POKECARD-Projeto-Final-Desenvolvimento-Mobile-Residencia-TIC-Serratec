import React, { useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./styles";
import { Fontisto } from '@expo/vector-icons';

export const Pokemon = () => {

    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaPokemon, setListaPokemon] = useState(["Fred", "Pedro"]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Fontisto name="smiling" size={24} color="black" />
            </View>
            <Text style={styles.title}>
                Loja De Cards
            </Text>
            {carregando ?
                <ActivityIndicator
                    size={"small"}
                />
                :
                <FlatList
                    data={listaPokemon}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Text style={styles.title}>
                                    {item}
                                </Text>
                            </View>
                            
                        )
                    }
                    }
                />
            }
        </View>
    )
}
