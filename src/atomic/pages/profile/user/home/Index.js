import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { useRecoilValue, useRecoilState } from "recoil";
import { system as systemAtom } from "../../../../../store/system";
import { users as usersAtom } from "../../../../../store/users";

const ButtonCustom = styled.button`
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 10px;
    min-width: 80px;
    cursor: pointer;
    box-shadow: 3px 3px 3px #ccc;
`;

const Home = () => {
    const [system, setSystem] = useRecoilState(systemAtom);
    const history = useHistory();

    const sair = () => {
        sessionStorage.removeItem("jwt");
        sessionStorage.removeItem("usuario");
        setSystem({ ...system, usuario: {}, jwt: null });
        history.push("/");
    };

    return (
        <Grid container spacing={3}>
            <pre>{JSON.stringify(system.usuario, null, 2)}</pre>
            <h1>{system.jwt}</h1>
            <ButtonCustom onClick={sair}> Sair </ButtonCustom>
        </Grid>
    );
};
export default Home;
