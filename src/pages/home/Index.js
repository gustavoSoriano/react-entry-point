import React from "react"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

/* REDUX */
import { useSelector } from 'react-redux'

import {doLogout} from '../../services/system'

const ButtonCustom = styled.button`
    border: 1px solid #ccc;
    border-radius:3px;
    padding:10px;
    min-width:80px;
    cursor:pointer;
    box-shadow:3px 3px 3px #ccc;
    
`

const Home = () => {
    let usuario   = useSelector( state => state.usuario )
    let system    = useSelector( state => state.system )
    const history = useHistory()

    const sair = () => {
        doLogout()
        history.push('/')
    }

    return (
        <>
            <h1>{JSON.stringify(usuario)}</h1>
            <h1>{system.jwt}</h1>
            <ButtonCustom onClick={ sair }> Sair </ButtonCustom>
        </>
    )
}
export default Home