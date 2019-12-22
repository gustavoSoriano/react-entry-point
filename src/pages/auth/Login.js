import React, { useEffect, useState } from "react"

/* REDUX */
import { useDispatch } from 'react-redux'

import { TextField, Button, Grid, Snackbar } from '@material-ui/core'
import { useHistory } from "react-router-dom"



const Login = () => {
    const history         = useHistory()
    let [user, setUser]   = useState({ name:"", email:"" })
    const [snackbar, setSnackbar] = useState({message:'', visible:false})
    const action          = useDispatch()

    useEffect( () => {
        console.log("Component carregado")
        return () => console.log("componente morreu")
    }, [])

    const logar = () => {
        if( !user.name || !user.email )return setSnackbar({message:'Informe os dados corretamente', visible:true})
        action({ type:'ADD_USER', usuario: { name:"soriano", email:"soriano@soriano.com" } })
        history.push('/app')
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
                <Button variant="contained" color="primary" onClick={ () => logar() }> Entrar </Button>
            </Grid>
        </Grid>
    )
}
export default Login