import React from "react"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

/* REDUX */
import { useSelector, useDispatch } from 'react-redux'


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
    const action  = useDispatch()
    const history = useHistory()

    const sair = () => {
        action({type:'ADD_USER', usuario: {name:'', email:''} })
        history.push('/')
    }

    return (
        <>
            <h1>Hello World {JSON.stringify(usuario)}</h1>
            <ButtonCustom onClick={ () => sair() }> Sair </ButtonCustom>
        </>
    )
}
export default Home