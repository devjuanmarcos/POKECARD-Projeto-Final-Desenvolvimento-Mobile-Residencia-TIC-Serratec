import { api } from "../api/api";

const getAll = () => {
    return api.get("cliente");
};

const get = (id) => {
    return api.get(`cliente/${id}`);
};

const create = (data) => {
    return api.post("cliente", data);
};

const update = (id, data) => {
    return api.put(`cliente/${id}`, data);
};

const remove = (id) => {
    return api.delete(`cliente/${id}`);
};
const clientService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default clientService;