import React, { useState, useEffect } from "react";

//const { response, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const doFetch = async () => {
            setLoading(true);
            try {
                const res = await fetch(url, options);
                setResponse(await res.json());
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        doFetch();
    }, []);

    return { response, error, loading };
};
export default useFetch;
