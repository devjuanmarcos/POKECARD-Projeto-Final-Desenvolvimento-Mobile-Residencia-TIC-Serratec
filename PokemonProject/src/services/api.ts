import axios, { AxiosResponse } from "axios";

const apiItensMagicos = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/'
});

export interface listaPokemon {
    index: string,
    name: string,
    url: string,
    preco?: number
}

interface getPokemonRespostaProps {
    count: number,
    results: listaPokemon[]
}

export function getEquipamentos(): Promise<AxiosResponse<getPokemonRespostaProps, any>> {
    let url = `magic-items/`;

    return apiItensMagicos.get(url);
}

export interface pokemonStatusProps {
    index: string;
    name: string;
    equipment_category: EquipmentCategory;
    rarity: Rarity;
    variants?: any[] | null;
    variant: boolean;
    desc?: (string)[] | null;
    url: string;
}
export interface EquipmentCategory {
    index: string;
    name: string;
    url: string;

}
export interface Rarity {
    name: string;
}

export function getPokemonEspecifico(index: string): Promise<AxiosResponse<pokemonStatusProps | any>> {
    let url = `magic-items/${index}`

    return apiItensMagicos.get(url);
}
