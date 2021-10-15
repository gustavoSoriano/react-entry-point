import React from "react"
import { BrowserRouter } from "react-router-dom"
import UserRouter from './profile/user/Index'
import AdminRouter from './profile/admin/Index'

const ADMIN = false

const Routes = () => (
    <BrowserRouter>
        {ADMIN ? <AdminRouter /> : <UserRouter />}
    </BrowserRouter>
)
export default Routes
