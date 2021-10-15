import React, { useEffect } from "react"
import { useRecoilState } from "recoil"
import { system as systemAtom } from "./store/system"
import { users as usersAtom } from "./store/users"
import Routes from "./routes/index"

import {getUsers} from './services/users'

const App = () => {
    const [system, setSystem] = useRecoilState(systemAtom)
    const [users, setUsers] = useRecoilState(usersAtom)

    useEffect( () => {
        setSystem({...system, usuario: JSON.parse(sessionStorage.getItem("usuario")), jwt: sessionStorage.getItem("jwt")})
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const {data} = await getUsers()
        setUsers( data || [] )
    }

    return <Routes />
}

export default App
