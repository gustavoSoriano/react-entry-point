import Axios from "axios";

export const getUsers = async () => {
    return await Axios.get(`todos`);
};
