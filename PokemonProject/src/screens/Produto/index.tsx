import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./styles";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getPokemon, listaPokemon } from "../../services/api";
import { ModalStatus } from "../../ModalStatus";
import { PokemonCard } from "../../components/PokemonCard";

export const Pokemon = () => {

    const [carregando, setCarregando] = useState<boolean>(false);
    const [listaPokemon, setListaPokemon] = useState<listaPokemon[]>([]);

    const [indexSelecionado, setIndexSelecionado] = useState<string>("")
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        requisicaoListaPokemon();
    }, []);

    function requisicaoListaPokemon() {
        setCarregando(true);
        getPokemon().then((res) => {
            setListaPokemon(res.data.data)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setCarregando(false);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons name="pokeball" size={24} color="black" />
                <Text style={styles.title}>
                    Loja De Cards
                </Text>
            </View>

            {carregando ?
                <ActivityIndicator
                    size={"small"}
                />
                :
                <FlatList
                    data={listaPokemon}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <PokemonCard
                                pokemon={item}
                                setIndexSelecionado={setIndexSelecionado}
                                setModal={setModal}
                            />
                        )
                    }
                    }
                />
            }
            {modal &&
                <ModalStatus
                    id={indexSelecionado}
                    modal={modal}
                    setModal={setModal}
                />
            }
        </View>
    )
}
