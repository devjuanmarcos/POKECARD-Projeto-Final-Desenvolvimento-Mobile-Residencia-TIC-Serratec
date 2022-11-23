import React, { useContext, useEffect, useState } from 'react';
import { View, Modal, Text, ModalProps, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { Botao } from '../../src/components/BotaoProps';
import { styles } from './styles';

import { Icon } from 'react-native-paper/lib/typescript/components/List/List';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { pokemonStatusProps, getPokemonEspecifico, listaPokemon } from '../../src/services/api';
import { CarrinhoContexto } from '../Context/CarrinhoContexto';

interface ModalStatusProps extends ModalProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    index: string;
    preco?: number
}

export const ModalStatus = ({ modal, setModal, index, preco, ...rest }: ModalStatusProps) => {

    const [pokemonStatus, setPokemonStatus] = useState<pokemonStatusProps>();
    const [carregando, setCarregando] = useState<boolean>(true);

    useEffect(() => {
        getPokemonEspecifico(index).then((res) => {
            setPokemonStatus(res.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setCarregando(false);
        })
    }, []);

    const salvaListaDePokemon = useContext(CarrinhoContexto).salvaListaDePokemon
    const tiraPokemonDoCarrinho = useContext(CarrinhoContexto).removePokemonDoCarrinho

    let precoRandomico = Math.floor(Math.random() * 1000)

    function botaPokemonNoCarrinho() {
        let pokemonComPreco: listaPokemon = {
            index: pokemonStatus.index,
            name: pokemonStatus.name,
            url: pokemonStatus.url,
            preco: precoRandomico
        }
        salvaListaDePokemon(pokemonComPreco)
        setModal(false);
    }

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setModal(!modal)
            }}
            {...rest}
        >
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    {carregando ?
                        <ActivityIndicator size={'large'} />
                        :
                        <>

                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>
                                    {pokemonStatus.name}
                                </Text>
                                <TouchableOpacity
                                    style={{ alignContent: "flex-end", width: "10%" }}
                                    onPress={() => setModal(false)}
                                >
                                    <Image style={styles.closeIcon} source={Icon} />
                                </TouchableOpacity>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.firstStatsContainer}>
                                    <View style={styles.firstStats}>
                                        <Text style={styles.textTitle}>
                                            Raridade:
                                        </Text>
                                        <Text style={styles.text}>
                                            {pokemonStatus.rarity.name}
                                        </Text>
                                    </View>
                                    <View style={styles.firstStats}>
                                        <Text style={styles.textTitle}>
                                            Tipo:
                                        </Text>
                                        <Text style={styles.text}>
                                            {pokemonStatus.desc[0]}
                                        </Text>
                                    </View>
                                    <View style={styles.firstStats}>
                                        <Text style={styles.textTitle}>
                                            Preco:
                                        </Text>
                                        <Text style={styles.text}>
                                            R$ {preco ? preco : precoRandomico},00
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.descriptionContainer}>
                                    <Text style={styles.textTitle}>
                                        Descricao:
                                    </Text>
                                    <Text style={styles.text}>
                                        {pokemonStatus.desc[1]}
                                    </Text>
                                </View>
                                {pokemonStatus.desc[2] &&
                                    <View style={styles.descriptionContainer}>
                                        <Text style={styles.textTitle}>
                                            Informações adicionais:
                                        </Text>
                                        <Text style={styles.text}>
                                            {pokemonStatus.desc.map((text, index) => {
                                                if (index > 1)
                                                    return text
                                            })}

                                        </Text>
                                    </View>
                                }
                            </ScrollView>
                            {preco ?
                                <Botao
                                    title='Remover do Carrinho'
                                    onPress={()=>tiraPokemonDoCarrinho(index)}
                                    activeOpacity={0.9}

                                />
                                :
                                <Botao
                                    title='Comprar'
                                    onPress={botaPokemonNoCarrinho}
                                    activeOpacity={0.9}

                                />
                            }
                        </>
                    }
                </View>
            </View>

        </Modal>
    )
}