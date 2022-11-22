import React, { useContext } from "react";
import { Text, TouchableOpacityProps, TouchableOpacity, Image } from "react-native";
import { listaPokemon } from "../../services/api";
import { styles } from "./styles";
import { Icon } from "react-native-paper/lib/typescript/components/List/List";
import { CarrinhoContexto } from "../../Context/CarrinhoContexto";

interface PkemonCardProps extends TouchableOpacityProps {
    equipamento: listaPokemon;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    setIndexSelecionado: React.Dispatch<React.SetStateAction<string>>;
    setPrecoSelecionado?: React.Dispatch<React.SetStateAction<number>>;
}

export const PokemonCard = ({ pokemon, setModal,setPrecoSelecionado, setIndexSelecionado }: PokemonCardProps) => {

    const removePokemonDoCarrinho = useContext(CarrinhoContexto).removePokemonDoCarrinho

    function abreModal() {
        setIndexSelecionado(pokemon.index);
        setPrecoSelecionado && setPrecoSelecionado(pokemon.preco)
        setModal(true);
    }

    return (

        <TouchableOpacity onPress={abreModal} style={styles.buttonMagicItem}>
            <Text style={styles.textMagicItem}>
                {pokemon.name}
            </Text>
            {pokemon.preco &&
                <TouchableOpacity onPress={()=>removePokemonDoCarrinho(pokemon.index)}>
                    <Image source={Icon} style={styles.closeIcon}/>
                </TouchableOpacity>
            }
        </TouchableOpacity>
    )
}