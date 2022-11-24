import axios, { AxiosResponse } from "axios";

const apiService = axios.create({
    baseURL: 'https://serverest.dev/',
    
});

const getAll = () => {
    return apiService.get("usuarios");
};

const get = (_id) => {
    return apiService.get(`usuarios/${_id}`);
};

const create = (data) => {
    return apiService.post("usuarios", data);
};

const update = (_id, data) => {
    return apiService.put(`usuarios/${_id}`, data);
};

const remove = (_id) => {
    return apiService.delete(`usuarios/${_id}`);
};
const clientService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default clientService;