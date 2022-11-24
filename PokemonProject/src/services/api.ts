import axios, { AxiosResponse } from "axios";

const apiPokemon = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2/',
    headers: {
      "X-Api-Key": "37f7946e-56d3-4861-b68a-b12470060fa4"
    }
});

export interface listaPokemon {
    id: string,
    name: string,
    //image: string,
    //hp: string,
    //types: string[],
}

interface getPokemonRespostaProps {
    count: number,
    data: listaPokemon[]
}

export function getPokemon(): Promise<AxiosResponse<getPokemonRespostaProps, any>> {
    let url = `cards/`;

    return apiPokemon.get(url);
}

export interface pokemonStatusProps {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Ability[];
  attacks: Attack[];
  weaknesses: Weakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities2;
  images: Images2;
  tcgplayer: Tcgplayer;
  cardmarket: Cardmarket;
}

export interface Ability {
  name: string;
  text: string;
  type: string;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Legalities {
  unlimited: string;
  standard: string;
  expanded: string;
}

export interface Images {
  symbol: string;
  logo: string;
}

export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Images;
}

export interface Legalities2 {
  unlimited: string;
  standard: string;
  expanded: string;
}

export interface Images2 {
  small: string;
  large: string;
}

export interface Normal {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface ReverseHolofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface Prices {
  normal: Normal;
  reverseHolofoil: ReverseHolofoil;
}

export interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices: Prices;
}

export interface Prices2 {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow?: any;
  suggestedPrice?: any;
  reverseHoloSell?: any;
  reverseHoloLow?: any;
  reverseHoloTrend?: any;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1?: any;
  reverseHoloAvg7?: any;
  reverseHoloAvg30?: any;
}

export interface Cardmarket {
  url: string;
  updatedAt: string;
  prices: Prices2;
}


export function getPokemonEspecifico(id: string): Promise<AxiosResponse<pokemonStatusProps | any>> {
    let url = `cards/${id}`

    return apiPokemon.get(url);
}
