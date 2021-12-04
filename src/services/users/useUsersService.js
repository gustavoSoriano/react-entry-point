import React, { useState, useEffect } from "react";
import Axios from "axios";

//const { response, loading, error, CreateUser } = useUsersService();

const useUsersService = () => {
    const [response, setResponse] = useState(null);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const doFetch = async () => {
            setLoading(true);
            try {
                const { data, status } = await Axios.get(`todos`);
                setResponse(data);
                setStatus(status);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        doFetch();
    }, []);

    return {
        response,
        status,
        error,
        loading,
        CreateUser: (user) => Axios.get(`todos`, user),
    };
};
export default useUsersService;
