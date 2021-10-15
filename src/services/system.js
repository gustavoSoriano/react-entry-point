import api from './api/index'

export const doLogin = async user => {
    const {data} = await api.get( `/todos/1` )
    if(data.userId)
    {
        sessionStorage.setItem("jwt", window.btoa( data.userId ))
        sessionStorage.setItem("usuario", JSON.stringify(data))
    }
    return data
}
