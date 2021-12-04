import { useEffect, createContext, useContext } from "react";

const Context = createContext({ Url: "" });
export const SSEProvider = ({ Url, children }) => (
    <Context.Provider value={{ Url }}>{children}</Context.Provider>
);

const useSSE = (eventName) => {
    const { Url } = useContext(Context);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [eventSource, setEventSource] = useState(new EventSource(Url));

    useEffect(() => {
        eventSource.addEventListener(eventName, setData);
        eventSource.addEventListener("error", setError);
        return () => eventSource.close();
    }, []);

    return [data, error];
};
export default useSSE;
