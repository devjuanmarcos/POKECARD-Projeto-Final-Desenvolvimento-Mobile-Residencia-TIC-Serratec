import axios, { AxiosResponse } from "axios";

const apiServer = axios.create({
    baseURL: 'https://serverest.dev/',
    
});

const create = (data) => {
    return apiServer.post("usuario", data);
}

export interface listaUsuarios {
    _id: string,
    nome: string,
    email: string,
    password: string
}


interface getUsuariosRespostaProps {
    count: number,
    result: listaUsuarios[]
}

export interface usuariosStatusProps {
    nome: string;
    email: string;
    password: string;
    administrador: string;
    _id: string;
}

export function getUsuarios(): Promise<AxiosResponse<getUsuariosRespostaProps, any>> {
    let url = `usuarios/`;

    return apiServer.get(url);
}

export function getUsuarioEspecifico(_id: string): Promise<AxiosResponse<usuariosStatusProps | any>> {
    let url = `usuarios/${_id}`

    return apiServer.get(url);
}

export function postUsuario(create): Promise<AxiosResponse<usuariosStatusProps | any>> {
    let url = `usuarios/`;

    return apiServer.post(url, create);
}