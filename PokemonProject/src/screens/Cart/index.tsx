import React, { useContext, useEffect, useState } from "react";
import { styles } from "./styles";
import { ModalStatus } from "../../ModalStatus";
import { CarrinhoContexto } from "../../Context/CarrinhoContexto";
import { Text, View, Image, ImageBackground, ScrollView, TouchableOpacity ,FlatList} from 'react-native';

import { PokemonCard } from '../../components/PokemonCard';

export const Carrinho = () => {

    const listaDePokemon  = useContext(CarrinhoContexto).listaDePokemon
    const precoTotal = useContext(CarrinhoContexto).precoTotal

    const [indexSelecionado, setIndexSelecionado] = useState<string>("");
    const [precoSelecionado, setPrecoSelecionado] = useState<number>(0);
    const [modal, setModal] = useState<boolean>(false);

    return (
        <View
            style={styles.container}
        >
          
            <Text style={styles.title}>
                Carrinho
            </Text>
            <FlatList
                data={listaDePokemon}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <PokemonCard
                            pokemon={item}
                            setIndexSelecionado={setIndexSelecionado}
                            setModal={setModal}
                            setPrecoSelecionado={setPrecoSelecionado}
                        />
                    )
                }
                }
            />
            <View style={styles.containerPreco}>
                <Text style={styles.title}>
                    Preço:
                </Text>
                <Text style={styles.title}>
                    R$ {precoTotal},00
                </Text>
            </View>
            {modal &&
                <ModalStatus
                    id={indexSelecionado}
                    modal={modal}
                    setModal={setModal}
                    preco={precoSelecionado}
                />
            }
        </View>
    )
}