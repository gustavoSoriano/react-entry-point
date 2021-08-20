import React from "react"
import { BrowserRouter, Router } from "react-router-dom"
import UserRouter from './profile/user/Index'
import AdminRouter from './profile/admin/Index'
import { createBrowserHistory } from 'history'

const ADMIN = false

const Routes = () => (
    <BrowserRouter>
        <Router history={createBrowserHistory()}>
            {ADMIN ? <AdminRouter /> : <UserRouter />}
        </Router>
    </BrowserRouter>
)
export default Routes
