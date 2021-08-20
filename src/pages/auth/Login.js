import React, { useEffect, useState } from "react"

import { TextField, Button, Grid, Snackbar } from '@material-ui/core'
import { useHistory } from "react-router-dom"

import {doLogin} from '../../services/system'

const Login = () => {
    const [snackbar, setSnackbar] = useState({message:'', visible:false})
    const history       = useHistory()
    let [user, setUser] = useState({ name:"", email:"" })

    useEffect( () => {
        console.log("Login carregado")
        return () => console.log("Login morreu")
    }, [])

    const logar = async () => {
        if( !user.name || !user.email )return setSnackbar({message:'Informe os dados corretamente', visible:true})
        
        if( await doLogin( user ) )
        {
            history.push('/')
        }
    }

    return (
        <Grid container spacing={3}>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={snackbar.visible} autoHideDuration={3000}
                onClose={() => setSnackbar({message:'', visible:false}) }
                message={<span>{snackbar.message}</span>}
                action={[ 
                    <Button key="close" style={{color:'#fff'}} size="small" onClick={ () => setSnackbar({message:'', visible:false}) }>
                        Fechar
                    </Button>
                ]}
            />

            <Grid item xs={12}>
                <TextField label="Name" value={user.name} onChange={ e => setUser({ ...user, name: e.target.value })  } variant="filled"/>
            </Grid>

            <Grid item xs={12}>
                <TextField label="E-mail" value={user.email} onChange={ e => setUser({ ...user, email: e.target.value }) } variant="filled"/>
            </Grid>

            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={ logar }> Entrar </Button>
            </Grid>
        </Grid>
    )
}
export default Login