import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout from '../../RouteWithLayout'

import DefaultLayout from '../../layouts/Default/Index'
import HomePage from '../../../pages/profile/user/home/Index'
import Login from '../../../pages/auth/Login'

const UserRouter = () => (
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
            isPrivate={false}
            layout={DefaultLayout}
            path="/login"
        />

        <Redirect to="/not-found" />
    </Switch>
)
export default UserRouter