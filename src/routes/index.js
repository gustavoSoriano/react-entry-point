import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PrivateRoute from './Auth/index'

import Home from '../pages/home/Index'
import Login from '../pages/auth/Login'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Login />} />
      <PrivateRoute path="/app" component={() => <Home />} />
    </Switch>
  </BrowserRouter>
)

export default Routes
