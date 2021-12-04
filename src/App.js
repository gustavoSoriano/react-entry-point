import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { system as systemAtom } from "./store/system";
import { users as usersAtom } from "./store/users";
import Routes from "./routes/index";

import useUsersService from "./services/users/useUsersService";

const App = () => {
    const [system, setSystem] = useRecoilState(systemAtom);
    const [users, setUsers] = useRecoilState(usersAtom);

    const { response, CreateUser } = useUsersService();

    useEffect(() => {
        setSystem({
            ...system,
            usuario: JSON.parse(sessionStorage.getItem("usuario")),
            jwt: sessionStorage.getItem("jwt"),
        });

        CreateUser({ userId: 1 }).then(console.log);
    }, []);

    useEffect(() => {
        console.log(response);
        setUsers(response || []);
    }, [response]);

    return <Routes />;
};

export default App;
