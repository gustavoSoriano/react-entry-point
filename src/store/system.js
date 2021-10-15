import { atom } from "recoil"

export const system = atom({
    key: "system",
    default: {
        jwt: '',
        server: '',
        usuario:{}
    }
})
