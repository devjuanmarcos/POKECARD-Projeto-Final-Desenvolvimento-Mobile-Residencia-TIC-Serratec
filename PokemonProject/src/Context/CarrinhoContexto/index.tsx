import React, { createContext, useEffect, useState } from "react";
import { listaPokemon } from "../../services/api";

import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProvedorCarrinhoProps {
    children: React.ReactNode
}

interface CarrinhoContextoProps {
    listaDePokemon: listaPokemon[];
    salvaListaDePokemon: (pokemon: listaPokemon) => void;
    precoTotal: number;
    removePokemonDoCarrinho: (index: string) => void;
}

export const CarrinhoContexto = createContext<CarrinhoContextoProps>({
    listaDePokemon: [{
        id: "",
        name: "",
    }],
    salvaListaDePokemon: (pokemon: listaPokemon) => { },
    precoTotal: 0,
    removePokemonDoCarrinho: (index: string) => { },
});

export const ProvedorCarrinho = ({ children }: ProvedorCarrinhoProps) => {
    const [listaDePokemon, setListaDePokemon] = useState<listaPokemon[]>([]);
    const [precoTotal, setPrecoTotal] = useState<number>(0);

    useEffect(()=>{
        getData().then((res)=>{
            setListaDePokemon(res ? res : [])
        })
    },[])

    useEffect(() => {
        let soma = 0;
        listaDePokemon.length >= 1 && listaDePokemon.map((pokemon: listaPokemon) => {
            soma = soma + Number(pokemon.preco)
        });
        setPrecoTotal(soma);
    }, [listaDePokemon])

    const storeData = async (value: listaPokemon[]) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@itens_carrinho', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@itens_carrinho')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    }

    function salvaListaDePokemon(pokemon: listaPokemon) {
        setListaDePokemon([...listaDePokemon, pokemon]);
        storeData([...listaDePokemon, pokemon])
    };

    function removePokemonDoCarrinho(id: string) {
        let novaListaDePokemon = listaDePokemon.filter((pokemon) => {
            return pokemon.id !== id
        })
        setListaDePokemon(novaListaDePokemon);
        storeData(novaListaDePokemon);
    };

    return (
        <CarrinhoContexto.Provider
            value={{
                listaDePokemon,
                salvaListaDePokemon,
                precoTotal,
                removePokemonDoCarrinho
            }}
        >
            {children}
        </CarrinhoContexto.Provider>
    )
}