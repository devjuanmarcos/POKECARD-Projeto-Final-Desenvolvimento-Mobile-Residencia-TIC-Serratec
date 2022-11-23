import axios, { AxiosResponse } from "axios";

const apiLogin = axios.create({
  baseURL: "",
});

export default apiLogin;

const apiItensMagicos = axios.create({
  baseURL: "https://www.dnd5eapi.co/api/",
});

export interface listaEquipamentos {
  index: string;
  name: string;
  url: string;
}

interface getEquipamentosRespostaProps {
  count: number;
  results: listaEquipamentos[];
}

export function getEquipamentos(): Promise<
  AxiosResponse<getEquipamentosRespostaProps, any>
> {
  let url = `magic-items/`;

  return apiItensMagicos.get(url);
}

export interface equipamentoStatusProps {
  index: string;
  name: string;
  equipment_category: EquipmentCategory;
  rarity: Rarity;
  variants?: any[] | null;
  variant: boolean;
  desc?: string[] | null;
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

export function getEquipementoEspecifico(
  index: string
): Promise<AxiosResponse<equipamentoStatusProps | any>> {
  let url = `magic-items/${index}`;

  return apiItensMagicos.get(url);
}
