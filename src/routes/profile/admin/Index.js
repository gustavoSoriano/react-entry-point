import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout from '../../RouteWithLayout'

import DefaultLayout from '../../layouts/Default/Index'
import HomePage from '../../../pages/profile/admin/home/Index'
import Login from '../../../pages/auth/Login'

const AdminRouter = () => (
    <Switch>
        <RouteWithLayout
            component={HomePage}
            exact={true}
            isPrivate={true}
            layout={DefaultLayout}
            path="/"
        />

        <RouteWithLayout
            component={Login}
            exact={true}
            isPrivate={false}
            layout={DefaultLayout}
            path="/login"
        />

        <Redirect to="/not-found" />
    </Switch>
)
export default AdminRouter