import React, { useContext, useEffect, useState } from 'react';
import { View, Modal, Text, ModalProps, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { Botao } from '../../src/components/BotaoProps';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { pokemonStatusProps, listaPokemon, getPokemonEspecifico } from '../../src/services/api';
import { CarrinhoContexto } from '../Context/CarrinhoContexto';

interface ModalStatusProps extends ModalProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
    preco?: number
}

export const ModalStatus = ({ modal, setModal, id, preco, ...rest }: ModalStatusProps) => {

    const [pokemonStatus, setPokemonStatus] = useState<pokemonStatusProps>();
    const [carregando, setCarregando] = useState<boolean>(true);

    useEffect(() => {
        getPokemonEspecifico(id).then((res) => {
            setPokemonStatus(res.data.data);
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
            id: pokemonStatus.id,
            name: pokemonStatus.name,
            preco: precoRandomico,
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
                                    <FontAwesome name="close" size={25} color="#fff" />
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                                <View style={styles.firstStatsContainer}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: pokemonStatus.images.large }} />
                                </View>
                                <View style={styles.descriptionContainer}>
                                    <Text style={styles.textTitle}>
                                        Raridade:
                                    </Text>
                                    <Text style={styles.text}>
                                        {pokemonStatus.rarity}
                                    </Text>
                                </View>
                                <View style={styles.descriptionContainer}>
                                    <Text style={styles.textTitle}>
                                        Preco:
                                    </Text>
                                    <Text style={styles.text}>
                                        R$ {pokemonStatus.cardmarket.prices.averageSellPrice}
                                    </Text>
                                </View>
                               

                            </ScrollView>
                            {preco ?
                                <Botao
                                    title='Remover do Carrinho'
                                    onPress={() => tiraPokemonDoCarrinho(id)}
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