import Axios from "axios";

export const doLogin = async (user) => {
    const { data } = await Axios.get(`todos/1`);
    if (data.userId) {
        sessionStorage.setItem("jwt", window.btoa(data.userId));
        sessionStorage.setItem("usuario", JSON.stringify(data));
        Axios.defaults.headers.common = {
            Authorization: `Bearer ${window.btoa(data.userId)}`,
        };
    }
    return data;
};
