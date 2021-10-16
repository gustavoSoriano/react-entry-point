import React, { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { system as systemAtom } from "../../store/system";

import { TextField, Grid, Snackbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { doLogin } from "../../services/system";

import Button from "../../components/button/Index";

const Login = () => {
    const [system, setSystem] = useRecoilState(systemAtom);
    const [snackbar, setSnackbar] = useState({ message: "", visible: false });
    const history = useHistory();
    let [user, setUser] = useState({ name: "", email: "" });

    useEffect(() => {
        if (system.usuario?.userId) {
            history.push("/");
        }
    }, [system.usuario]);

    useEffect(() => {
        console.log("Login carregado");
        return () => console.log("Login morreu");
    }, []);

    const logar = async () => {
        if (!user.name || !user.email)
            return setSnackbar({
                message: "Informe os dados corretamente",
                visible: true,
            });

        try {
            const u = await doLogin(user);

            if (u.userId) {
                setSystem({
                    ...system,
                    usuario: u,
                    jwt: window.btoa(u.userId),
                });
            }
        } catch ({ message }) {
            return setSnackbar({ message, visible: true });
        }
    };

    return (
        <Grid container spacing={3}>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={snackbar.visible}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ message: "", visible: false })}
                message={<span>{snackbar.message}</span>}
                action={[
                    <Button
                        key="close"
                        size="small"
                        onClick={() =>
                            setSnackbar({ message: "", visible: false })
                        }
                    >
                        Fechar
                    </Button>,
                ]}
            />

            <Grid item xs={12}>
                <TextField
                    label="Name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    variant="filled"
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    label="E-mail"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                    variant="filled"
                />
            </Grid>

            <Grid item xs={12}>
                <Button onClick={logar}> Entrar </Button>
            </Grid>
        </Grid>
    );
};
export default Login;
