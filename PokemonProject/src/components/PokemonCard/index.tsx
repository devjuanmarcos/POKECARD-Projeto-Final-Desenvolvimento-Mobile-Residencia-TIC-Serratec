import React, { useContext } from "react";
import { Text, TouchableOpacityProps, TouchableOpacity, Image, View } from "react-native";
import { listaPokemon } from "../../services/api";
import { styles } from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { CarrinhoContexto } from "../../Context/CarrinhoContexto";

interface PokemonCardProps extends TouchableOpacityProps {
    pokemon: listaPokemon;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIndexSelecionado: React.Dispatch<React.SetStateAction<string>>;
    setPrecoSelecionado?: React.Dispatch<React.SetStateAction<number>>;
}

export const PokemonCard = ({ pokemon, setModal,setPrecoSelecionado, setIndexSelecionado }: PokemonCardProps) => {

    const removePokemonDoCarrinho = useContext(CarrinhoContexto).removePokemonDoCarrinho

    function abreModal() {
        setIndexSelecionado(pokemon.id);
        setPrecoSelecionado && setPrecoSelecionado(pokemon.preco)
        setModal(true);
    }

    return (

        <TouchableOpacity onPress={abreModal} style={styles.buttonMagicItem}>
            <Text style={styles.textMagicItem}>
                {pokemon.name}
            </Text>
            {pokemon.preco &&
                <TouchableOpacity onPress={()=>removePokemonDoCarrinho(pokemon.id)}>
                    <FontAwesome name="close" size={25} color="#fff" />
                </TouchableOpacity>
            }
        </TouchableOpacity>
    )
}