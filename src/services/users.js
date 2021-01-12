import api from './api/index'

export const getUsers = async () => {
    return await api('/todos')
}
